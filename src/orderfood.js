
import React from 'react';
class OrderFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Soup: false,
      Salad: false,
      Sandwich: false,
      SoupAndSandwich: false,
      SaladAndSandwich: false,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
        Soup
          <input
            name="Soup"
            type="checkbox"
            checked={this.state.Soup}
            onChange={this.handleInputChange} />
        </label>
      <label>
      Salad
            <input
            name="Salad"
            type="checkbox"
            checked={this.state.Salad}
            onChange={this.handleInputChange} />
            </label>
            <label>
            Sandwich
            <input
            name="Sandwich"
            type="checkbox"
            checked={this.state.Sandwich}
            onChange={this.handleInputChange} />
            
            </label>
            <p></p>
            <label>
            Soup and Sandwich
            <input
            name="SoupAndSandwich"
            type="checkbox"
            checked={this.state.SoupAndSandwich}
            onChange={this.handleInputChange} />
        </label>
        <label>
        Salad and Sandwich
        <input
            name="SaladAndSandwich"
            type="checkbox"
            checked={this.state.SaladAndSandwich}
            onChange={this.handleInputChange} />
        
        </label>
        <p></p>
        <label>
    Cell Phone:
    <input type="text" name="cellphone" />
    <p></p>
  </label>
        <label>
          <input
            name="Order"
            type="submit"
            value="Order Food"
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default OrderFood;
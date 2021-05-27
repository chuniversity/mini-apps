
// Express to serve up an index.html file and its associated assets
// Build your UI using ReactJS
// Use MongoDB or MySQL to store your user data

// homepage of your application should have a Checkout button,
// which when clicked, takes the user to the first of several forms. We'll call the forms F1, F2, F3.
// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.
// At each step, a Next button allows the user to progress to the next step in the checkout process.

// The final step is a confirmation page which summarizes the data collected in the prior three steps.
// This page contains a Purchase button that completes the purchase. When the purchase is complete, the user is returned to the homepage.
// Every run through the checkout process (each time Checkout is clicked) creates a new record in your server's database, and each step in the checkout process saves its piece of the data to that record (the data is saved when Next is clicked).


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stage: 0,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phonenumber: '',
      creditcard: '',
      expirydate: '',
      cvv: '',
      billingzipcode: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);

  }

  // handle stage click

  handleClick(event) {
    event.preventDefault();
    this.setState({
      stage: this.state.stage + 1
    })
  }
  handlePurchase(event) {
    event.preventDefault();
    var data = this.state;
    let url = '/order';
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(data),
    }
    fetch(url, options)
      .then(res => {
        console.log(res.status)
      })
      .catch(err => {
        console.log(err)
      });
    this.setState({
      stage: 0
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    if (this.state.stage === 0) {
      return (
        <div>
          <div><h1>HomePage: </h1></div>
          <div><h2>Best Internet Site Ever. </h2></div>
          <CheckoutButton clickHandler={this.handleClick} />
        </div>
      )
    }
    else if (this.state.stage === 1) {
      return (
        <div><F1 clickHandler={this.handleClick} changeHandler={this.handleChange} /></div>
      );
    }
    else if (this.state.stage === 2) {
      return (
        <div><F2 clickHandler={this.handleClick} changeHandler={this.handleChange} /></div>
      )
    }
    else if (this.state.stage === 3) {
      return (
        <div><F3 clickHandler={this.handleClick} changeHandler={this.handleChange} /></div>
      )
    }

    else if (this.state.stage === 4) {
      return (
        <div><Confirmation state={this.state} purchaseHandler={this.handlePurchase} /></div>
      )
    }


  }

}

const CheckoutButton = ({ clickHandler }) => (
  <form onSubmit={clickHandler}>

    <button type="submit">Checkout</button>
  </form >
);

// F1 collects name, email, and password for account creation.

const F1 = ({ clickHandler, changeHandler }) => (
  <form onSubmit={clickHandler} >
    <p><label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={changeHandler}></input></p>
    <p><label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" onChange={changeHandler}></input></p>
    <p> <label htmlFor="password">Password:</label>
      <input type="text" id="password" name="password" onChange={changeHandler}></input></p>
    <p>
      <button type="submit">Next</button></p>
  </form >
);

// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.

const F2 = ({ clickHandler, changeHandler }) => (
  <form onSubmit={(event) => clickHandler(event)} >
    <p><label htmlFor="address1">Address 1:</label>
      <input type="text" id="address1" name="address1" onChange={changeHandler}></input></p>

    <p><label htmlFor="address2">Address 2:</label>
      <input type="text" id="address2" name="address2" onChange={changeHandler}></input></p>

    <p><label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" onChange={changeHandler}></input></p>

    <p> <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" onChange={changeHandler}></input></p>

    <p> <label htmlFor="zipcode">Zip Code:</label>
      <input type="text" id="zipcode" name="zipcode" onChange={changeHandler}></input></p>

    <p> <label htmlFor="phonenumber">Phone Number:</label>
      <input type="text" id="phonenumber" name="phonenumber" onChange={changeHandler}></input></p>

    <p><button type="submit">Next</button></p>
  </form >
);

//  F3 collects credit card #, expiry date, CVV, and billing zip code.

const F3 = ({ clickHandler, changeHandler }) => (
  <form onSubmit={(event) => clickHandler(event)} >
    <p><label htmlFor="creditcard">Credit Card:</label>
      <input type="text" id="creditcard" name="creditcard" onChange={changeHandler}></input></p>

    <p><label htmlFor="expirydate">Expiry Date:</label>
      <input type="text" id="expirydate" name="expirydate" onChange={changeHandler}></input></p>

    <p><label htmlFor="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" onChange={changeHandler}></input></p>

    <p> <label htmlFor="billingzipcode">Billing Zip Code:</label>
      <input type="text" id="billingzipcode" name="billingzipcode" onChange={changeHandler}></input></p>

    <p><button type="submit">Next</button></p>
  </form >
);

const Confirmation = ({ state, purchaseHandler }) => (
  <div>
    <div><h1>Confirmation: </h1></div>
    <div>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Password: {state.password}</p>
      <p>Address 1: {state.address1}</p>
      <p>Address 2: {state.address2}</p>
      <p>City: {state.city}</p>
      <p>State: {state.state}</p>
      <p>Zip Code: {state.zipcode}</p>
      <p>Phone Number: {state.phonenumber}</p>
      <p>Expirary Date: {state.creditcard}</p>
      <p>CVV: {state.cvv}</p>
      <p>Billing Zip Code: {state.billingzipcode}</p>
      <form onSubmit={purchaseHandler}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  </div>


);




ReactDOM.render(<App />, document.getElementById('app'));
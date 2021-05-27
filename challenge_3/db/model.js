const db = require('./index');

const insertOrder = (data, callback) => {

  const { name, email, password, address1, address2, city, zipcode, phonenumber, creditcard, expirydate, cvv, billingzipcode } = data;
  const params = [name, email, password, address1, address2, city, zipcode, phonenumber, creditcard, expirydate, cvv, billingzipcode];
  const queryString = 'INSERT INTO order_table (name1, email, password1, address1, address2, city, zipcode, phonenumber, creditcard, expirydate, cvv, billingzipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';



  db.query(queryString, params, (err, success) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, success)
    }

  });
}

module.exports = {
  insertOrder,
}
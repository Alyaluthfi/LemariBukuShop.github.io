const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/confirm.html', (req, res) => {
    const { name, address, paymentMethod, 'book-title': bookTitle, 'book-price': bookPrice } = req.body;
    
    // Handle payment processing here
    // For example, integrate with a payment gateway like Stripe or PayPal

    // Send a response (for demonstration, we just send the details back)
    res.send(`
        <h1>Payment Confirmation</h1>
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>Payment Method: ${paymentMethod}</p>
        <p>Book Title: ${bookTitle}</p>
        <p>Book Price: Rp ${bookPrice}</p>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

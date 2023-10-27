document.getElementById('submitBtn').addEventListener('click', function() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;

    // Basic validation (you should perform more rigorous validation in a real scenario)
    if (cardNumber && expiryDate && cvv) {
        // Here you can send the payment information to your server using AJAX or fetch API
        // Example: sendPaymentToServer(cardNumber, expiryDate, cvv);
        document.getElementById('paymentStatus').textContent = 'Payment Successful!';
    } else {
        document.getElementById('paymentStatus').textContent = 'Invalid Payment Details. Please try again.';
    }
});

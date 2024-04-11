function calculateTotal() {
    var invoiceTotal = parseFloat(document.getElementById('invoiceTotal').value);
    var quantity = parseFloat(document.getElementById('quantity').value);
    
    if (isNaN(invoiceTotal) || isNaN(quantity)) {
        alert('Please enter valid numbers for invoice total and quantity.');
        return;
    }
    
    var result = (invoiceTotal / quantity) / 1.15;
    
    document.getElementById('result').innerHTML = 'Result: ' + result.toFixed(2);
}

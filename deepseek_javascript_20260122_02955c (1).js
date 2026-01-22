// Add this function to send automatic WhatsApp message
function sendAutoWhatsApp(orderData) {
    // Using Twilio WhatsApp API (Free trial available)
    const accountSid = 'YOUR_TWILIO_SID';
    const authToken = 'YOUR_TWILIO_TOKEN';
    const client = require('twilio')(accountSid, authToken);
    
    const messageBody = `নতুন অর্ডার!
    👤 নাম: ${orderData.name}
    📞 ফোন: ${orderData.phone}
    📍 ঠিকানা: ${orderData.address}
    💰 মোট: ৳${orderData.total}
    🛒 আইটেম: ${orderData.items.length}টি`;
    
    // This requires backend server
    // Use Google Apps Script for free backend
}
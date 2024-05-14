const Razorpay = require('razorpay');

apiKey="rzp_test_2uohNUJq12MkaS"
apiSecret="vyHMkEBMVhu91WfRmlFmFB1A"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;
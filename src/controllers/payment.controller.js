const paymentService=require("../services/payment.service.js")

const createPaymentLink=async(req,res)=>{

    try {
        const paymentLink=await paymentService.createPaymentLink(req.params.id);
        return res.status(200).send(paymentLink)
    } catch (error) {
        return res.status(500).send(error.message);
    }

}
// update payment information

const updatePaymentInformation=async(req,res)=>{

    try {
     
console.log("payment status");
        await paymentService.updatePaymentInformation(req.query)
        return res.status(200).send({message:"payment information updated",status:true})
    } catch (error) {
        return res.status(400).send(error.message);
    }

}

module.exports={createPaymentLink,updatePaymentInformation}
import Email from "../Database/models.js";




export const saveSendEmails = async (request, response) => {
    try {
        const email = await new Email(request.body);
        email.save();

        response.status(200).json('Email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}

export const getMails = async (request,  response) => {
    try{
       let email;
       if(request.params.type === 'bin'){
        email = await Email.find({ bin: true })
       }
       else if(request.params.type === 'allmail'){
        email = await Email.find({});
       }
       else if(request.params.type === 'starred'){
        email = await Email.find({ starred: true, bin: false });
       }
       else{
        email=await Email.find({type:request.params.type})
       }
       return response.status(200).json(email);
    }
    catch (error) {
    response.status(500).json(error.message);
}
}

export const moveMailsToBin = async (request, response) => {
    try {
        await Email.updateMany({ _id: { $in: request.body }}, { $set: { bin: true, starred: false, type: '' }});
        response.status(200).json('Email moved to bin');
    } catch (error) {
        response.status(500).json(error.message);   
    }
}

export const toggleStarredMail = async (request, response) => {
    try{
        await Email.updateOne({ _id: request.body.id }, { $set: { starred: request.body.value }})
        response.status(200).json('Value is updated');
    }
    catch (error) {
        response.status(500).json(error.message);   
    }
}

export const deleteMails = async (request, response) => {
    try{
        await Email.deleteMany({ _id: { $in: request.body }})
        response.status(200).json('Mails deleted successfully');
    }
    catch (error) {
        response.status(500).json(error.message);   
    }
}
const shortid = require('shortid');
const URL = require('../model/UrlModel')


async function handleRedirectUrl(req,res){
    const body = req.body.url;

    let url = body;
    
    

    const shortURL = shortid.generate();

    const newUrl = new URL({
        shortURL: shortURL,
        redirectURL: url,
    });

    try{

        await newUrl.save();
        res.status(200).send(shortURL);
    }catch(err){
        console.error(err);
        res.status(500).send({message: 'Internal Server Error'});
    }


}
async function handleShortUrl(req,res){
    const id = req.params.id;
    try{

        const docs = await URL.findOne({shortURL: id});

        if(docs)
            res.redirect(docs.redirectURL);
        else
            res.status(404).send('Error: URL not found')
    }catch(err){
        res.status(500).send('Internal server error');
    }
 
}


module.exports = {
    handleRedirectUrl,
    handleShortUrl,
}

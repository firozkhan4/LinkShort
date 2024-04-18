const express = require('express');
const mongoose = require('mongoose');
const urlRout = require('./routers/urlRout');
const PORT = 3000;


mongoose.connect('mongodb://127.0.0.1:27017/Linkshort').then(()=> console.log('Connected')).catch(()=> console.log('Error'));



const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/url',urlRout);

app.post('/user',(req,res)=>{
    const userdata = req.body;

    const newUser = new User({
        userId: userdata.username,
        userEmail: userdata.email,
        userPassword: userdata.password
    });

    newUser.save().then(()=>{
        res.status(200).send('Successfull');
        res.end();
    }).catch(()=> {
        res.status(500).send('Sign up failed');
        res.end();
    });

})

app.get('/user/:username/:password',async (req,res)=>{

    const username = req.params.id;
    const password = req.params.password;

    try{

        const docs = await User.findOne({userid: username, userPassword: password});

        if(docs)
            res.status(200).send("Login Successfull");
        else
            res.status(404).send("Error: User not found")
    }catch(err){
        res.status(500).send('Internal server error');
    }
})



app.listen(PORT, ()=>{
    console.log(`Server is listing at PORT:${PORT}`);
})
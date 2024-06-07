const express = require('express');
const mongoose = require('mongoose');

//establishing routers for dog and walkers
const dogRouter = require('./routes/dogRouter')
const walkerRouter = require('./routes/walkerRouter')

const app = express();
app.set('view engine', 'ejs');
app.listen(8080);

//set for use of stylesheets and images
app.use(express.static("public")); 

//used to accept form data in better format
app.use(express.urlencoded({extended: true}));

//atlas Hosted MongoDB deployment
const dbConnection = "mongodb+srv://user:password1234@wagglydb.y5azkgd.mongodb.net/WagglyDB?retryWrites=true&w=majority&appName=WagglyDB"

//async connection to database
mongoose.connect(dbConnection).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log(err)
});

//Home Page
app.get('/',(req,res) => {
    
    res.render('homePage',{
        pageTitle:'Home'
    });
    
})

//binding of router discussed on line 5
app.use('/dog', dogRouter);

app.get('/dogAdd',(req,res) => {
    
    res.render('DogAdd',{
        pageTitle:'Dog Registration'
    });
    
})

// see line 6
app.use('/walker', walkerRouter);

app.get('/walkerAdd',(req,res) => {
    
    res.render('WalkerAdd',{
        pageTitle:'Walker Registration'
    });
    
})


//Else Condition catching 404 errors
app.use((req,res) => {
    res.status(404).render('404',{pageTitle:'404'});
})

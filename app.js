const express = require('express');
const mongoose = require('mongoose');

const dogRouter = require('./routes/dogRouter')
const walkerRouter = require('./routes/walkerRouter')

const app = express();
app.set('view engine', 'ejs');
app.listen(8080);

//set for use of stylesheets and images
app.use(express.static("public")); 

//used to accept form data
app.use(express.urlencoded({extended: true}));

const dbConnection = "mongodb+srv://user:password1234@wagglydb.y5azkgd.mongodb.net/WagglyDB?retryWrites=true&w=majority&appName=WagglyDB"

mongoose.connect(dbConnection).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log(err)
});


app.get('/',(req,res) => {
    
    res.render('homePage',{
        pageTitle:'Home'
    });
    
})

app.use('/dog', dogRouter);

app.get('/dogAdd',(req,res) => {
    
    res.render('DogAdd',{
        pageTitle:'Dog Registration'
    });
    
})

app.use('/walker', walkerRouter);
// app.get('/walker',(req, res) => {

//     res.render('walker',{
//         pageTitle:'Walker'
//     });
 
// });

app.get('/walkerAdd',(req,res) => {
    
    res.render('WalkerAdd',{
        pageTitle:'Walker Registration'
    });
    
})


//Else Condition catching 404 errors
app.use((req,res) => {
    res.status(404).render('404',{pageTitle:'404'});
})

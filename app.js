const express = require('express');
const dogRouter = require('./routes/dogRouter')
const mongoose = require('mongoose');

app.listen(8080)

const app = express();
app.set('view engine', 'ejs');

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


app.use('/dog', dogRouter);



app.get('/',(req, res) => {

    res.sendFile('./views/homePage.html', { root: __dirname});

});



app.get('/dogAdd',(req,res) => {
    
    res.render('DogAdd',{
        pageTitle:'DogsAdd'
    });
    
})

app.get('/walker',(req, res) => {

    res.render('walker',{
        pageTitle:'Walker'
    });
 
});

app.use((req,res) => {
    res.status(404).render('404');
})
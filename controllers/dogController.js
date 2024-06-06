const { dogDB } = require('../model/dog');

const consoleTest = (req,res,next) => {
    console.log("test")
    next()
}

const getDogs = (req,res) => {
    dogDB.find().then((result) => {
        const locRes = result;
        res.send(locRes)
    }).catch((err) =>{
        console.log(err)
    });
}

const showPage = (req, res) => {

    dogDB.find().then((result) =>{
        const dogList = result

        res.render('dog', { 
            pageTitle:'Dogs',
            dogList
        });

    }).catch((err) => {
        console.log(err)
    })
}

const addDog =  (req,res) => {
    const dog = new dogDB(req.body)

    dog.save().then((result) =>{
      res.redirect('/dog');  
      console.log(result)
    }).catch((err) => {
        console.log(err)
    })
    
}

module.exports = {
    getDogs,
    consoleTest,
    showPage,
    addDog
}
//import walkerDB using { } so walker.walkerDB not necessary 
const { walkerDB } = require('../model/walker');

//functionality test to demonstrate ability to chain middleware
const consoleTest = (req,res,next) => {
    console.log("test")
    next()
}


const getWalkers = (req,res) => {
    walkerDB.find().then((result) => {
        const locRes = result;
        res.send(locRes)
    }).catch((err) =>{
        console.log(err)
    });
}

//bound to page load, displays dog list by pulling from database
const showPage = (req, res) => {

    walkerDB.find().then((result) =>{
        const walkerList = result

        res.render('walker', { 
            pageTitle:'Walkers',
            walkerList
        });

    }).catch((err) => {
        console.log(err)
    })
}

//POST request applied to /walker, which then redirects to there to show change
const addWalker =  (req,res) => {
    const walker = new walkerDB(req.body)

    walker.save().then((result) =>{
      res.redirect('/walker');  
      console.log(result)
    }).catch((err) => {
        console.log(err)
    })
    
}

//imported by router
module.exports = {
    getWalkers,
    consoleTest,
    showPage,
    addWalker
}
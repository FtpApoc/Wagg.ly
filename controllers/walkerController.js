const { walkerDB } = require('../model/walker');

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

const addWalker =  (req,res) => {
    const walker = new walkerDB(req.body)

    walker.save().then((result) =>{
      res.redirect('/walker');  
      console.log(result)
    }).catch((err) => {
        console.log(err)
    })
    
}

module.exports = {
    getWalkers,
    consoleTest,
    showPage,
    addWalker
}
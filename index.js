

const express = require("express")
const bodyParser = require("body-parser")

const cors = require("cors")

//**************************************************** */

// const csvtojson=require('csvtojson');
// const csvfilepath="csv/covid19-confirmed.csv"
// csvtojson()
// .fromFile(csvfilepath)
// .then((json)=>{

// console.log(json)


// })


//***************************************************** */


const router = express.Router()
router.get('/death', cors(), function(req, res) {
  


const csvtojson = require('csvtojson');
    const csvfilepath = "csv/covid19-confirmed.csv"
    csvtojson()
        .fromFile(csvfilepath)
        .then((json) => {


            return res.send(json)

        })



    
});




//**************************************************** */


// const router = express.Router()
// router.get("/confirmed", (req, res, next) => {
// const csvtojson = require('csvtojson');
//     const csvfilepath = "csv/covid19-confirmed.csv"
//     csvtojson()
//         .fromFile(csvfilepath)
//         .then((json) => {


//             return res.send(json)

//         })
// })

// router.get("/death", (req, res, next) => {
//     const csvtojson = require('csvtojson');
//         const csvfilepath = "csv/covid19-death.csv"
//         csvtojson()
//             .fromFile(csvfilepath)
//             .then((json) => {
    
                
//                 return res.send(json)
    
//             })
//     })
//     router.get("/recovered", (req, res, next) => {
//         const csvtojson = require('csvtojson');
//             const csvfilepath = "csv/covid19-recovered.csv"
//             csvtojson()
//                 .fromFile(csvfilepath)
//                 .then((json) => {
        
        
//                     return res.send(json)
        
//                 })
//         })





const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true

}))



app.use(router)
app.listen(3000, () => {

    console.log('Server is running on port', 3000)

})
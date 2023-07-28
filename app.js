
const request = require("request")
const fs = require("fs")
const weather = require("./weather")
const geocode = require("./geo")
const yargs = require("yargs")
const express = require("express")
const path = require("path")
const app = express()
const hbs = require('hbs');

const PORT = 5000 // process.env.PORT || 5000

///////// partials
const prtialsPath = path.join(__dirname , "./partials")
hbs.registerPartials(prtialsPath)

//////////

app.set('view engine', 'hbs')
// app.get("/" , (req,res)=>{
// res.send("hello")
// })
app.get("/" , (req , res)=>{
    res.render( "index" ,{
        title :"Home Page",
        desc :"please prerss on check weather ",
    })
})

app.get("/CountryInfo" , (req , res)=>{
    res.render( "countryinfo" ,{
        title :"Country weather info",
        CountryName :"Country Name :",
        latitude : "longtitude :",
        longtitude : "longtitude :",
        cweather :"Current Weather :"
    })
})

app.get("/contact" , (req , res)=>{
    res.render( "contact" ,{
        title :"Contact",
        name:"Mahmoud",
        nationality :"syrian:",
        age : "35",
    
    })
})

app.listen (PORT , ()=>{
    console.log(`this web work on port ${PORT}`)
})



 const showdet = (country) => {
    geocode(country, (error,data)=>{
        console.log("error:", error)
    console.log("data:", data)
    
    
    weather(data.latitude , data.longtitude  , (error,data) =>{
    console.log("error:", error)
    console.log("data:", data)
    
    })
    })
}

showdet("syria")

// command   node app  country --cName="germany"
// yargs.command({
//     command:"country",
//     describe:"enter country",
//     builder:{
//         cName:{
//             describe:"counrty name",
//             demandOption : true,
//             type:"string"
//         },
//     },
//     handler:(x)=>{
//         showdet(x.cName)
        
//     }
// })
// yargs.parse()


// for nodemon Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
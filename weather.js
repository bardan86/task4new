
const request = require("request")

const forCast = (latitude,longtitude , callback) =>{

const url = "https://api.weatherapi.com/v1/current.json?key=d04381e17b42413bb2f160026232007&q=" + latitude +"," + longtitude

request({url,json : true}, (error,res) =>{
    // url here is short hand for key an value for the object
    // json : true convert json data to object 
    // console.log(res.body)

    // const data1 = JSON.parse(res.body)
    // console.log(data1)
    // console.log(res.body.location.name)
    // console.log(res.body.current.condition.text)

    if (error){
        callback ("cant connect to the web" ,undefined)
        // console.log("error has occured")
    }else if (res.body.error){
        callback(res.body.error.message , undefined)
        // console.log(res.body.error.message)
    }else {
        callback (undefined,res.body.location.name +" its " + res.body.current.condition.text)
        // console.log(res.body.location.name, res.body.current.condition.text)
        // console.log(res.body.current.condition.text)
    }

})}

module.exports= forCast
// forCast(30.05,31.25, (error,data) =>{
// console.log("error:", error)
// console.log("data:", data)
// })
// module.exports={forCast}
// 29.871903452398
// 26.4941838299718
// {
//     "location": {
//         "name": "London",
//         "region": "City of London, Greater London",
//         "country": "United Kingdom",
//         "lat": 51.52,
//         "lon": -0.11,
//         "tz_id": "Europe/London",
//         "localtime_epoch": 1689529003,
//         "localtime": "2023-07-16 18:36"
//     },
//     "current": {
//         "last_updated_epoch": 1689528600,
//         "last_updated": "2023-07-16 18:30",
//         "temp_c": 19.0,
//         "temp_f": 66.2,
//         "is_day": 1,
//         "condition": {
//             "text": "Moderate rain",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png",
//             "code": 1189
//         },
//         "wind_mph": 15.0,
//         "wind_kph": 24.1,
//         "wind_degree": 230,
//         "wind_dir": "SW",
//         "pressure_mb": 1011.0,
//         "pressure_in": 29.85,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 56,
//         "cloud": 75,
//         "feelslike_c": 19.0,
//         "feelslike_f": 66.2,
//         "vis_km": 10.0,
//         "vis_miles": 6.0,
//         "uv": 4.0,
//         "gust_mph": 14.5,
//         "gust_kph": 23.4
//     }
// }

const axios =require('axios');
const env=require('dotenv').config();
const API_KEY = process.env.WEATHER_API_KEY;
let lat,lon;
async function weather(lat,lon) {
    try{

    
    const temp=await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params:{
        lat,lon,appid:API_KEY,
        units: 'metric'

    }})
    const city=temp.data.name;
    const temperature=temp.data.main.temp;
    const description=temp.data.weather[0].description;
    const humidity=temp.data.main.humidity;
    const windSpeed=temp.data.wind.speed;
    const finalData={
        city,temperature,description,humidity,windSpeed
    }
    return (finalData)}
    catch(error){
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Failed to get weather');
    }
}
async function getCoordinates(city){
    try{
        const ans=await axios.get('http://api.openweathermap.org/geo/1.0/direct',{
            params: {
                    q: city,
                    limit: 1,
                    appid: API_KEY
                }
        });
        //console.log(ans.data);
        const arr=ans.data;
        lat=ans.data[0].lat;
        lon=ans.data[0].lon;
        return [lat,lon];
    }
    catch(error){
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Failed to get coordinates');
    }
}
const express=require('express');
const app=express();
app.get('/weather',async (req,res)=>{
    try{
        const { city } = req.query;
        if (!city) return res.status(400).json({ error: 'City is required' });
        const [lat,lon]=await getCoordinates(city);
        
            const ans=await weather(lat,lon);
            //console.log(JSON.stringify(ans))
            res.json(ans)
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
   // res.send(ans[0])
});
app.listen(3000);

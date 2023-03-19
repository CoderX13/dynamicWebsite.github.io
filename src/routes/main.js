const express = require('express');

const Detail = require('../models/detail');
const Slider = require('../models/silder');
const Service = require('../models/Services');
const Contact = require('../models/Contact');
const routes = express.Router();

routes.get("/", async(req, res) => {
    const detail = await Detail.findOne({"_id": "6415cbd359ca96e45998f539"})
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(detail)
    res.render("index", {
        detail: detail,
        slides: slides,
        services: services
    })
})

routes.get('/gallery', async (req, res) =>{
    const detail = await Detail.findOne({"_id": "6415cbd359ca96e45998f539"})
    res.render('gallery', {
        detail: detail
    });
})

routes.post("/process-contact-form",async (request, response) => {
    console.log("this Form is Submitted")
    console.log(request.body)
    try{
        const data = await Contact.create(request.body)
        console.log(data)
        response.redirect('/')
    }catch (e){
        console.log(e)
        response.redirect('/')
    }   
})
module.exports=routes;
const express = require("express");
const hbs = require('hbs');
const routes = require("./routes/main")
const app = express();
const mongoose = require('mongoose');
const Detail = require('./models/detail')
const Slider = require('./models/silder')
const Service = require('./models/Services');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static',express.static("public"));
app.use('', routes);

app.set('view engine', 'hbs');
app.set("views", "views");

hbs.registerPartials("views/partials")

// const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/dynamic_website').on('open', () => {
//     console.log("MongoDB is Connected!");
//     Detail.create({
//         brandName: "Cyber Security LLC",
//         brandIconUrl: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png",
//         links:[
//             {
//                 label: "Home",
//                 url: "/"
//             },
//             {
//                 label: "Services",
//                 url: "/services"
//             }
//         ]
//     })
// }).on('error', () =>{
//     console.log("MOngoDB is Not Connected!");
// });

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/dynamic_website')
.catch(error => handleError(error)).then(
    console.log('DB Connected'),

    // Service.create([
    //     {
    //         icon: 'fab fa-accusoft',
    //         title: 'Provide Best Courses',
    //         description: 'We Provides the Best Courses That Help Students to Grow in their Career',
    //         linkText: 'https://getbootstrap.com/docs/5.0/components/carousel/#slides-only',
    //         link: 'Check'
    //     },
    //     {
    //         icon: 'fa-sharp fa-solid fa-magnet',
    //         title: 'Provide Best Courses',
    //         description: 'We Provides the Best Courses That Help Students to Grow in their Career',
    //         linkText: 'https://getbootstrap.com/docs/5.0/components/carousel/#slides-only',
    //         link: 'Check'
    //     },
    //     {
    //         icon: 'fa-sharp fa-solid fa-gift',
    //         title: 'Provide Best Courses',
    //         description: 'We Provides the Best Courses That Help Students to Grow in their Career',
    //         linkText: 'https://getbootstrap.com/docs/5.0/components/carousel/#slides-only',
    //         link: 'Check'
    //     }
    // ])


    // Slider.create([
    //     {
    //         title: "Learn Java is very Easy!",
    //         subTitle: 'Java is One of the Best Programming Language For Web Applications',
    //         imageUrl: '/static/images/pic1.jpg'
    //     },
    //     {
    //         title: "Learn Spring Boot is very Easy!",
    //         subTitle: 'Spring Boot is the Best Tool For Rest API',
    //         imageUrl: '/static/images/pic2.jpg'
    //     },
    //     {
    //         title: "Learn SQL is very Easy!",
    //         subTitle: 'SQL is the Best Language for the Database Handling from the Command Line and Workbench',
    //         imageUrl: '/static/images/pic3.jpg'
    //     }
    // ])

    // Detail.create({
    //     brandName: "Cyber Security LLC",
    //     brandIconUrl: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_960_720.png",
    //     links:[
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact-us"
    //         }
    //     ]
    // })
)


app.listen(process.env.PORT | 8000, () =>{
    console.log("Server Started");
});
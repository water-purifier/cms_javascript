import express from "express";
import nunjucks from "nunjucks";
import * as myController from "./_controllers.js";


async function lanchServer() {
    const app = express();
    //render template
    nunjucks.configure('src/views', {
        autoescape: true,
        express: app
    });
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    // static folder
    app.use(express.static('public'))

    app.get('/',(req,res)=>{
        res.render('index.twig',{user: 'keywords'});
    })
    app.get('/api/posts', myController.getPostAll);
    app.get('/users',myController.getUserAll);
    app.get('/login',myController.login);
    app.get('/register',myController.register);

    app.listen(3000);
}

lanchServer();

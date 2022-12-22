import express from "express";
import nunjucks from "nunjucks";
import * as myController from "./_controllers.js";


async function lanchServer() {
    const app = express();
    nunjucks.configure('src/views', {
        autoescape: true,
        express: app
    });
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/',(req,res)=>{
        res.render('index.twig',{user: '김세현'});
    })
    app.get('/api/posts', myController.getPostAll);
    // app.set('/api/posts', myController.setPost());
    app.get('/users',myController.getUserAll);

    app.listen(3000);
}

lanchServer();

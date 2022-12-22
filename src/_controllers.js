import {Post, User, QueryTypes, sequelize} from "./_models.js";
import nunjucks from "nunjucks";

export async function setPost(req, res) {
    const post = await Post.create(

    );
    res.status(200).json(post);
}

export async function getPostAll(req, res) {
    const posts = await Post.findAll();
    res.status(200).json(posts);
}

export async function getUserAll(req, res) {
    // const users = await sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT });
    const users = await User.findAll();
    res.render('users.twig', {users: users});
}


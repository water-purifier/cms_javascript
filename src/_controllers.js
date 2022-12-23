import {Post, User, QueryTypes, sequelize} from "./_models.js";

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

export async function login(req,res){
    res.render('login.twig');
}

export async function register(req,res){
    res.render('register.twig');
}

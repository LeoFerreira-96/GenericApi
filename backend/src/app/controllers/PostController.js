import Post from '../models/Post'

class PostController {
    async index(req, res){
        const posts = await Post.find()
        res.json(posts)
    }

    async store(req, res){
        const post = await Post.create(req.body)
        res.json(post)
    }

    async update(req, res){
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body ,
            {new:true}
            )
        res.json(post)
    }

    async delete(req, res){
        const post = await Post.findByIdAndDelete(
            req.params.id
            )
        res.json(post)
    }
}

export default new PostController()
import Category from '../models/Category'

class CategoryController {
    async index(req, res){
        const category = await Category.find()
        res.json(category)
    }

    async store(req, res){
        const category = await Category.create(req.body)
        res.json(category)
    }

    async update(req, res){
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body ,
            {new:true}
            )
        res.json(category)
    }

    async delete(req, res){
        const category = await Category.findByIdAndDelete(
            req.params.id
            )
        res.json(category)
    }
}

export default new CategoryController()
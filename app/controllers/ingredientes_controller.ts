// import type { HttpContext } from '@adonisjs/core/http'

import Ingrediente from "../models/ingrediente.js"

export default class IngredientesController {

    index(){
        return Ingrediente.all()
    }

    show({params}){
        const id = params.id
        return Ingrediente.query().where('id', id).first()
    }
    
    async store({request}){
        const dados = request.only(['nome'])
        return await Ingrediente.create(dados)
    }
    
    async update({request, params}){
        const dados = request.only(['nome'])

        const id = params.id
        const filme = await Ingrediente.findOrFail(id)
        
        filme.merge(dados)
        await filme.save()

        return filme
    }
    
    async destroy({params}){
        const id = params.id
        const filme = await Ingrediente.findOrFail(id)
        
        filme.delete()
    }

}
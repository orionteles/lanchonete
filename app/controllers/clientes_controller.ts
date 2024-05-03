// import type { HttpContext } from '@adonisjs/core/http'

import Cliente from "../models/cliente.js";

export default class ClientesController {
    async index(){
        return await Cliente.all()
    }

    async store({request}){
        return await Cliente.create(request.all())
        
    }
}
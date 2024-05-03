import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany(
      [
        {nome: 'Orion', idade: 10},
        {nome: 'Maria', idade: 20},
        {nome: 'João', idade: 30},
      ]
    )
  }
}
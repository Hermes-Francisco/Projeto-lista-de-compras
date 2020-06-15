import Sequelize from 'sequelize';

import databaseconfig from '../config/database';

import Usuario from '../app/models/Usuario';

const models = [Usuario];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.conexao = new Sequelize(databaseconfig);
        models.map(model => model.init(this.conexao));
    }
}

export default new Database();
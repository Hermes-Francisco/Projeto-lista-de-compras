import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
    static init(sequelize){
        super.init(
            {
                nome : Sequelize.STRING,
                email : Sequelize.STRING,
                password : Sequelize.VIRTUAL,
                password_hash : Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Usuario;
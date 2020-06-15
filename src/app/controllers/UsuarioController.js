import Usuario from '../models/Usuario';

class UsuarioController{
    async index(req, res){
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    }

    async show(req, res){
        const { id } = req.params;
        let usuario = Usuario.findByPk(id);
        return res.json(usuario);
    }

    async store(req, res){
        const { nome, email, password_hash } = req.body;
        let usuario = Usuario.findOne({where : {email}});
        if(!usuario){
            Usuario.create({ nome, email, password_hash });
        }
        return res.json(usuario);
    }

    async update(req, res){}
    async destroy(req, res){}
}

export default new UsuarioController();
import { Router } from 'express';

import UsuarioController from './app/controllers/UsuarioController';
const routes = new Router();

routes.get('/', (req, res) => {
    return res.send('Funcionando');
});

routes.get('/usuarios', UsuarioController.index)
routes.get('/usuarios/:id', UsuarioController.show)
routes.post('/usuarios', UsuarioController.store)
routes.put('/usuarios', UsuarioController.update)
routes.delete('/usuarios', UsuarioController.destroy)

export default routes;
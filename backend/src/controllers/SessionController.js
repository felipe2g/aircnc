const User = require('../models/User')

//INDEX: LISTAGEM
//SHOW: LISTAR UNICA
//STORE: CRIAR
//UPDATE: ALTERAR
//DESTROY: REMOVER/DELETAR

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne( { email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};
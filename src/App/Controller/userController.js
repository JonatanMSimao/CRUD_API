const connection = require('../../Config/Database/database');

const md5 = require('md5');

module.exports = {

    async create(request, response) {

        const { nome, email, senha } = request.body;
      
        try {
            const userOk = await connection('cadastro').where('email', email).select('email').first();
            
            if(userOk) {
               return response.status(403).json({ error: 'Usuário já Cadastrado' });

            } else {
                
                const user = await connection('cadastro').insert({
                    nome: nome, email: email, senha: md5(senha)
                
                });
                return response.status(200).json({
                    id: user, nome: nome, email: email, senha: md5(senha)
            
                });
            }

        } catch (error) {
            return response.status(500).json({ error: 'Erro no Server' });
        }
    },

    async read(request, response) {
            
        const users = await connection('cadastro').select('*');
        
        try {
            if(users) {
                return response.status(200).json({ User: users });

            } else {
                return response.status(403).json({ Error: 'Erro ao Listar' });
            }

        } catch (error) {
            return response.status(500).json({ error: 'Erro no Server' });
        }
    },

    async update(request, response) {

        const { id } = request.params;

        const { nome, email, senha } = request.body;

        const user = await connection('cadastro').where('id', id).update({
            nome: nome, email: email, senha: md5(senha)
        });

        try {
            if(user) {
                return response.status(200).json({ 
                    id: id, nome: nome, email: email, senha: md5(senha)
                 });
            } else {
                return response.status(403).json({ error: 'Este Usuário não existe' });
            }

        } catch (error) {
            return response.status(500).json({ error: 'Erro no Server' });
        }
    },

    async delete(request, response) {

        const { id } = request.params;
        const user = await connection('cadastro').where('id', id).delete();

        try {
            if(user) {
                return response.status(200).json({ User: 'Usuário Excluído' });

            } else {
                return response.status(403).json({ error: 'Este Usuário não existe' });
            }
        } catch (error) {
            return response.status(500).json({ error: 'Erro no Server' });
        }
    },   
    
}
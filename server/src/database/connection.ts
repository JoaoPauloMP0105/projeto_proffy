import knex from 'knex';
import path from 'path'

const db = knex({
    client: 'sqlite3',
    connection: {
        //Caminho de armazendamento do banco de dados
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //Utilização de conteudo nullo dentro do banco de dados
    useNullAsDefault: true,
})

export default db;
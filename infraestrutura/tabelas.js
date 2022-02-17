 class Tabelas {
     init(conexao){
        this.conexao = conexao
        this.criarAtendimentos()
     }
     
     // "CREATE TABLE IF NOT EXISTS - importante colocar esse comando se dará erro"
     criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimnento (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status  varchar(20) NOT NULL, observacao text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
             if(erro) {
                 console.log(erro)
             } else {
                 console.log('Tabela Atendimento criada com sucesso!')
             } 
        })
     }
 }

 module.exports = new Tabelas
module.exports = class ClientesDao{
    constructor(bd){
        this.bd = bd;
    }
    verClientes(){
        return new Promise((resolve,reject)=>{
            // acessando meu banco de dados all mostra tudo
        
            this.bd.all("SELECT * FROM CLIENTES",(ERROR,response)=>{
               if( ERROR ) 
               {
                   reject(`Erro ao rodar a consulta ${ERROR}`)
               }else {
                 resolve(response)  
               } 
            })
        })
    };
    deletarClientes(id){
        return new Promise((resolve,reject)=>{
            this.bd.all(`DELETE  FROM CLIENTES WHERE Cliente_id = ${id}`, (error,response)=>{
                if(error){
                    reject(`Erro ao deletar cliente ${error}`)
                } else {
                    resolve(response)  
                }
            })
        })
    };
    adicionarClientes(cadastro){

        return new Promise((resolve,reject)=>{
            this.bd.all(`INSERT OR IGNORE INTO CLIENTES (Cliente_id, Nome, Cep, NumeroRes, Telefone)
            VALUES (?,?,?,?,?) `,[cadastro.Cliente_id,cadastro.Nome,cadastro.Cep,cadastro.NumeroRes,cadastro.Telefone],(error, response)=>{
                if(error){
                    reject(`Erro ao adicionar cliente ${error}`)
                } else {
                    resolve(response)  
                }
            } 
        )})
    };

    AtualizaClientes(parametro,id){

        return new Promise((resolve,reject)=>{
           
            const query = `UPDATE CLIENTES SET Cep = COALESCE(?,Cep), NumeroRes = COALESCE(?,NumeroRes), Telefone = COALESCE(?,Telefone) WHERE Cliente_id = ${id}`
            this.bd.all(query,[parametro[0],parametro[1],parametro[2]], (error, response) => {
                if(error){
                    reject(`Erro ao atualizar cliente ${error}`)
                } else {
                    resolve(response)  
                }
            } 
        )})
    };
}
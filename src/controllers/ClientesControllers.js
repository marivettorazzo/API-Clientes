const ClientesDao = require("../dao/Clientes-dao")

module.exports = (app,bd) => {

    const DaoClientes = new ClientesDao(bd)

    app.get("/Clientes", async (req,res)=>{
        try{
            const resultVerClientes = await DaoClientes.verClientes()
            res.send(resultVerClientes)
        } catch(error) {
            res.send(error)
        }
 })
    app.delete("/Deletar/:id", async (req,res)=>{
        
        try{ 
            const id = parseInt(req.params.id)
            const DeletarClientes = await DaoClientes.deletarClientes(`${id}`)
            res.status(200).send(DeletarClientes)
        } catch(error) {
            res.status(400).send(error)
        }
    })
    app.post("/inserir", async (req,res)=>{
        
        try{ 
            const cadastro = req.body
            const AdicionarClientes = await DaoClientes.adicionarClientes(cadastro)
            res.status(200).send(AdicionarClientes)
        } catch(error) {
            res.status(400).send(error)
        }
    })

    app.put("/Atualizar/:id", async (req,res)=>{
        
        const Cep = req.body.Cep
        const NumeroRes = req.body.NumeroRes
        const Telefone = req.body.Telefone
        const parametro = [Cep,NumeroRes,Telefone]
        console.log(parametro)
        const id = parseInt(req.params.id)
        try{ 
            const AtualizarClientes = await DaoClientes.AtualizaClientes(parametro,id)
            res.status(200).send(AtualizarClientes)
        } catch(error) {
            res.send(error)
        }
    })
}
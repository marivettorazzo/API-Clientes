const ClientesDao = require("../dao/Clientes-dao")

module.exports = (app,bd) => {

    const DaoClientes = new ClientesDao(bd)

    app.get("/clientes", async (req,res)=>{
        try{
            const resultVerClientes = await DaoClientes.verClientes()
            res.send(resultVerClientes)
        } catch(error) {
            res.send(error)
        }
 })
    app.delete("/deletar/:id", async (req,res)=>{
        
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

    app.put("/atualizar/:id", async (req,res)=>{
        
        const Cep = req.body.Cep
        const NumeroRes = req.body.NumeroRes
        const Telefone = req.body.Telefone
        const parametro = [Cep,NumeroRes,Telefone]
        
        const id = parseInt(req.params.id)
        try{ 
            const AtualizarClientes = await DaoClientes.AtualizaClientes(parametro,id)
            res.status(200).send(AtualizarClientes)
        } catch(error) {
            res.send(error)
        }
    })
}
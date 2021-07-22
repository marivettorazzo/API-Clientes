
const request = require("supertest")

test("Testando Rota de Clientes GET", async()=>{
    await request("http://localhost:3001")
    .get("/Clientes")
    .expect(200)
    .then((response)=>console.log("Passou no teste."))
})
test("Testando Rota de Clientes PUT", async()=>{
    await request("http://localhost:3001")
    .post("/Atualizar/1")
    .send({
        "Cep":"12345678",
        "NumeroRes":"123",
        "Telefone":"123456789"
    })
    .expect(200)
    .then((response)=>console.log("Passou no teste."))
    .catch(error =>console.log(error))
})
test("Testando Rota de Clientes POST", async()=>{
    await request("http://localhost:3001")
    .post("/inserir")
    .send({
        "Cliente_id":"00",
        "Nome":"Cliente Teste",
        "Cep":"12345678",
        "NumeroRes":"123",
        "Telefone":"123456789"
    })
    .expect(200)
    .then((response)=>console.log("Passou no teste."))
    .catch(error =>console.log(error))
})
test("Testando Rota de Clientes DELETE", async()=>{
    await request("http://localhost:3001")
    .post("/inserir/1")
    .expect(200)
    .then((response)=>console.log("Passou no teste."))
    .catch(error =>console.log(error))
})
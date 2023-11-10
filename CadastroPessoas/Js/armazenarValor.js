const url_server = "http://localhost:3002";

function cadastrar() {
    console.log('Enviando dados ao servidor...');
  
    // Recuperando dados do formulário e armazenando na variável dados, que está estruturada em formato JSON
    const dados = {
      nome: document.querySelector('[id="nome"]').value,
      cpf: document.querySelector('[id="cpf"]').value,
      telefone: document.querySelector('[id="telefone"]').value,
      endereco: document.querySelector('[id="endereco"]').value,
      email: document.querySelector('[id="email"]').value,
      senha: document.querySelector('[id="senha"]').value,
    }

    console.log(dados);
  
    // Requisição para back-end
  
  }
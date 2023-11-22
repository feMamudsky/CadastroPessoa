const url_server = "http://localhost:3001";

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

    // Faz requisição ao servidor usando o verbo POST, enviando os dados para o servidor
fetch(`${url_server}/cadastro`, {
  // define o uso do método POST
  method: 'POST',
  // informações sobre o cabeçalho da requisição
  headers: {
      'Content-Type': 'application/json'
  },
  // transforma os dados da requisição em um JSON chamado body
  body: JSON.stringify(dados)
})
  // Depois de feita a requisição, o front-end irá receber um retorno do servidor
  .then(response => response.json())
   // Se toda a requisição deu certo, será informado no log
   .then(dados => {
      console.log('Resposta do servidor:', dados);
      // Faça algo com a resposta do servidor, se necessário
   })
   // Caso tenha algum tipo de erro na requisição, é lançada a excessão
   .catch(error => {
       console.error('Erro ao enviar dados para o servidor:', error);
       // Trate os erros, se necessário
   });
  }

  function listarPessoas() {

		// faça algo antes de montar a tabela, SE NECESSÁRIO

    fetch(`${url_server}/pessoas`)
        .then(response => response.json())
        .then(data => {
            // Inserindo os dados da pessoa na tabela
						// fazendo um loop usando forEach para percorrer todos os dados retornados pelo servidor
						data.forEach(pessoa => {
								// Criando os elementos HTML
                const tabela = document.querySelector('table');
                const elementTr = document.createElement('tr');
                const tdNome = document.createElement('td');
                const tdCpf = document.createElement('td');
                const tdTelefone = document.createElement('td');
                const tdEndereco = document.createElement('td');
                const tdEmail = document.createElement('td');
                const tdSenha = document.createElement('td');

								// Inserindo os dados da pessoa no elemento	
                tdNome.textContent = pessoa.nome;
                tdCpf.textContent = pessoa.cpf;
                tdTelefone.textContent = pessoa.telefone;
                tdEndereco.textContent = pessoa.endereco;
                tdEmail.textContent = pessoa.email;
                tdSenha.textContent = pessoa.senha;

								// Inserindo os elementos nas linhas da tabela (tr => TableRow)
                elementTr.appendChild(tdNome);
                elementTr.appendChild(tdCpf);
                elementTr.appendChild(tdTelefone);
                elementTr.appendChild(tdEndereco);
                elementTr.appendChild(tdEmail);
                elementTr.appendChild(tdSenha);


								// Adicionando a linha com as informações na tabela
                tabela.appendChild(elementTr);
        });
});
};
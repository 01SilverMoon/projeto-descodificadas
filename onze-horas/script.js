function Enviar() {

    var nome = document.getElementById("cNome");

    if(nome.value != "") {
        alert("Agradeço sua mensagem, " + nome.value + " seus dados foram encaminhados com sucesso!");
    }
  }
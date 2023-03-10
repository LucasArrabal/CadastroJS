function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var email = document.forms["formulario"]["email"].value;
    var senha = document.forms["formulario"]["senha"].value;
    var confirmarSenha = document.forms["formulario"]["confirmar_senha"].value;

    if (nome == "") {
      alert("Por favor, preencha o campo Nome");
      return false;
    }

    if (email == "") {
      alert("Por favor, preencha o campo E-mail");
      return false;
    }

    if (senha == "") {
      alert("Por favor, preencha o campo Senha");
      return false;
    }

    if (senha != confirmarSenha) {
      alert("As senhas não correspondem");
      return false;
    }

    return true;
  }
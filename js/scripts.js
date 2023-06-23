/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("icone-copiar").addEventListener("click", function() {
  var mensagem = "Texto predefinido a ser copiado"; // Mensagem que será copiada

  // Cria um elemento temporário para realizar a cópia
  var inputTemporario = document.createElement("input");
  inputTemporario.setAttribute("value", mensagem);

  // Adiciona o elemento temporário ao corpo do documento
  document.body.appendChild(inputTemporario);

  // Seleciona o texto do elemento temporário
  inputTemporario.select();

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Remove o elemento temporário do documento
  document.body.removeChild(inputTemporario);

  // Exibe uma mensagem de sucesso
  alert("Mensagem copiada: " + mensagem);
});


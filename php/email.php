<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];

  // Configurar os detalhes do e-mail
  $to = "seu-email@example.com"; // substitua pelo seu endereço de e-mail
  $subject = "Contato do Portfólio";
  $body = "Nome: " . $nome . "\n";
  $body .= "E-mail: " . $email . "\n";
  $body .= "Mensagem: " . $mensagem;

  // Enviar o e-mail
  if (mail($to, $subject, $body)) {
    echo "Mensagem enviada com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar a mensagem.";
  }
}
?>

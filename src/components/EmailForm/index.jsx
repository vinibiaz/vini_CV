import './styles.css';
import React, { useState } from 'react';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui, você pode implementar o código para enviar o e-mail usando uma biblioteca ou serviço de e-mail, como o Nodemailer ou o SendGrid
    console.log(`E-mail: ${email}`);
    console.log(`Mensagem: ${message}`);

    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enviar Mensagem</h3>
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={handleEmailChange}
      />
      <textarea
        placeholder="Digite sua mensagem..."
        value={message}
        onChange={handleMessageChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
import './App.css';
import { Button } from './components/Button';
import { EmailForm } from './components/EmailForm';
import { Header } from './components/Header';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from "./components/Footer";
import { Curriculo } from "./components/Curriculo";
function App() {

  const handleClick = () => {
    console.log("Baixar o curriculo ....");
    const downloadLink = document.createElement('a');
    downloadLink.href = './downloads/meu_curriculo.pdf'; // substitua pelo caminho correto para o seu currículo PDF
    downloadLink.download = 'meu_curriculo.pdf'; // substitua pelo nome de arquivo desejado para o download

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className="App">
      <Header />
      <Curriculo />
      <SocialMedia />

      <div className='button-container'>
        <Button text="BAIXAR MEU CURRICULO" onClick={handleClick}></Button>
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;

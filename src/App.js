import './App.css';
import Title from './components/Titulo/Titulo';
import Repos from './components/Repos/Repos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title titulo= "Meu Segundo Projeto React do Zero"/>
        <Title subtitulo="Meus repos:"/>
        <Repos />
        <Title autora = "Feito por Valenthina Temudo | Exercício React {Reprograma}" />
      </header>
    </div>
  );
}

export default App;

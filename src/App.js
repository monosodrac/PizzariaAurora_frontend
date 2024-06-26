import Logo from './imgs/logo.png';
import MainImg from './imgs/img-lg.png';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <img src={Logo} alt="Logo do Restaurante" />
          <div className='menu-hamburguer'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <section className='main-img'>
        <img src={MainImg} alt="Imagem principal" />
      </section>
    </div>
  );
}

export default App;

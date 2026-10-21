import './App.css'

function App() {

  return (
    <div>
    <header>
          <h1>OpenBoard</h1>
          <div>
              <a id="link-google" href="http://google.com">Entrar</a>
              <button className="btn">Publicar vaga $299</button>
          </div>
      </header>

    <footer>
        <p>
            <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
        </p>

        <nav>
            <a href="">Entrar</a>
            <a href="">Publicar vaga</a>
            <a href="">Sobre</a>
            <a href="">Privacidade</a>
        </nav>
    </footer>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Logout'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

function App() {
  const [count, setCount] = useState(0)
  const history = useHistory();

  const handleLogout = () => {
    // Tentar fechar a aba
    const confirmed = window.confirm("Você realmente deseja sair da aplicação?");
    if (confirmed) {
      //window.close(); // Tenta fechar a aba
      history.push('/logout'); // Altere para a rota que leva à sua página de saída
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Teste APP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={handleLogout}>Sair</button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

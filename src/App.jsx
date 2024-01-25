import Calculator from './components/Calculator/index'
import './Main.css'

function App() {
  return (
    <div className='container'>
      <img src="https://raw.githubusercontent.com/tarcio02/calculadora_imc_react/641287b4d0258eee6d85c7b86256b6eb287801ad/src/assets/personal_traine.svg" alt="personal treiner"></img>
      <div className="calculator">
      <Calculator/>
      </div>
    </div>
  )
}

export default App

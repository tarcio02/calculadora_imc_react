import Calculator from './components/Calculator/index'
import Result from './components/Resultado/index'
import './Main.css'

function App() {
  return (
    <div className='container'>
      <img src="./src/assets/personal_traine.svg" alt="personal treiner"></img>
      <div className="calculator">
      <Calculator/>
      <Result/>
      </div>
    </div>
  )
}

export default App

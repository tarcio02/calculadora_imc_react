import Calculator from './components/Calculator/index'
import './Main.css'

function App() {
  return (
    <div className='container'>
      <img src="./src/assets/personal_traine.svg" alt="personal treiner"></img>
      <div className="calculator">
      <Calculator/>
      </div>
    </div>
  )
}

export default App

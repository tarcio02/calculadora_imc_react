import './calculator.css'


/*Esse arquivo irá conter o container com os inputs para entrada de valores*/

const Calculator = () => {
    return(
        <>
        <h1 className="title">CALCULADORA - IMC </h1>
            <form className="calc">
                <div className="input-box">
                    <label for="weigth">Peso em kg</label>
                    <div className="input-field">
                        <i className="fa-solid fa-weight-hanging"></i>
                        <input type="number" id="weigth" required></input>
                        <span>kg</span>
                    </div>
                </div>
                <div className="input-box">
                    <label for="heigth">Altura em metros</label>
                    <div className="input-field">
                        <i className="fa-solid fa-ruler"></i>
                        <input type="number" id="heigth" required></input>
                        <span>M</span>
                    </div>
                </div>
            </form>
            </>
    )
}

export default Calculator
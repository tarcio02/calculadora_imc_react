import { useState } from 'react';
import './calculator.css'


/*Esse arquivo irá conter o container com os inputs para entrada de valores
juntamente com o container que irá apresentar os resultados do cálculo e uma cta para o link de whatsapp
*/

const Calculator = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaCta = (weight, heigth)=> {
        if(weight && heigth != " ") {
            return <>
                <div className="alerta">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p>Tenha uma avaliação completado seu Físico agora mesmo. Clique no link.</p>
                    <a target='blank' href="http://wa.me/5577998276235"><i class="fa-solid fa-arrow-up-right-from-square"></i> Mais informações</a>
                </div>
            </>
        } 
    }

const calculaImc = (weigth, heigth) => {
    let alturaImc = heigth * heigth
    let imc = (weigth / alturaImc).toFixed(1)

    if(weigth == "" || imc == Infinity){
        return <>
        <i id='imcVazio' className="fa-solid fa-triangle-exclamation"></i>
        <h2 id='imcVazio'>Insira os valores acima.</h2>
        </>
    } else {
        return <>
    <h2 id='imc'>{imc}</h2> <a target='blank' id="tabela" href="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg">Confira seu IMC na tabela</a>
    </>
    }
}

    return(
        <>
        <h1 className="title">CALCULADORA - IMC</h1>
            <form className="calc">
                <div className="input-box">
                    <label htmlFor="weigth">Peso em kg</label>
                    <div className="input-field">
                        <i className="fa-solid fa-weight-hanging"></i>
                        <input type="number" id="weigth" required onChange={e => setPeso(Number(e.target.value))}/>
                        <span>kg</span>
                    </div>
                </div>
                <div className="input-box">
                    <label htmlFor="heigth">Altura em metros</label>
                    <div className="input-field">
                        <i className="fa-solid fa-ruler"></i>
                        <input type="number" id="heigth" required onChange={e => setAltura(Number(e.target.value))}/>
                        <span>M</span>
                    </div>
                </div>
            </form>
            <div className="resultado">
                <p>Seu IMC:</p>
                {calculaImc(peso, altura)}
            </div>
            {renderizaCta(peso, altura)}
            </>
    )
}

export default Calculator
import './result.css'

/* Esse arquivo será resposável por conter e exibir uma caixa de mensagens com uma chamada para o link de whatsapp e o
resultado consequente dos valores inseridos nos inputs do arquivo "./Calculator/index.jsx"*/

const Result = () => {
    return (
        <div className="result">
        <div className="alert">
            <div className="msg">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <p>
                    Cuide melhor da sua SAÚDE e do seu FÍSICO faça uma valiação presencial
                </p>
            </div>
            <a href="">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                Mais informações
            </a>
        </div>
        <div className="imc">
            <h4>Seu IMC:</h4>
            <div className="valor">
                <h2>14,3</h2>
                <p>cuidado preste atenção</p>
            </div>
        </div>
    </div>
    )
}

export default Result
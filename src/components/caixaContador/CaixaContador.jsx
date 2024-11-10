import style from './CaixaContador.module.css'

function CaixaContador({valor,funcao1,funcao2}){
    return(
        <div id={style.principal}>
            <div>
                <h1>Contador Simples</h1>
                <p>Valor Atual: {valor}</p>
                <div id={style.botoes}>
                    <p onClick={funcao1} className={style.botao}>Incrementar</p>
                    <p onClick={funcao2} className={style.botao}>Decrementar</p>
                </div>
            </div>
        </div>
    )
}

export default CaixaContador 
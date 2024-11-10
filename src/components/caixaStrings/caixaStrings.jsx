import style from './caixaStrings.module.css'

function caixaStrings({valor,funcao1}){
    return(
        <div id={style.principal}>
            <h1>Manipulação de String</h1>
            <input placeholder='Digite seu nome' onChange={funcao1}></input>
            <p>Nome: {valor}</p>
        </div>
    )
}

export default caixaStrings
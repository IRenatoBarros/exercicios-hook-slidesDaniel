import style from './caixaObjeto.module.css'

function CaixaObjeto({valor, event, valor2, event2}){
    return(
        <div id={style.principal}>
            <h1>Manipulação de Objeto</h1>
            <div>
                <input onChange={event} type='text' placeholder='Nome'></input>
                <input onChange={event2} type='number' placeholder='Idade'></input>  
            </div>
            <p>Usuário: {valor}, {valor2} anos</p>
        </div>
    )
}

export default CaixaObjeto
import style from './caixaVisibilidade.module.css'

function caixaVisibilidade({funcao,valor}){
    return(
        <div id={style.principal}>
            <h1>Visibilidade</h1>
            <p className={style.botao} onClick={funcao}>Clique aqui</p>
            <p style={{display:valor}}>Esse texto pode ser ocultado ou mostrado</p>
        </div>
    )
}

export default caixaVisibilidade
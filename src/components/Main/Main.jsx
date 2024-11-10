import style from './Main.module.css'
import CaixaContador from '../caixaContador/CaixaContador'
import { useState } from 'react'
import CaixaStrings from '../caixaStrings/caixaStrings.jsx'
import CaixaLista from '../caixaLista/caixaLista.jsx'
import CaixaObjeto from '../caixaObjeto/caixaObjeto.jsx'
import CaixaVisibilidade from '../caixaVisibilidade/caixaVisibilidade.jsx'

function Main(){

    const [contador,setContador] = useState(0);
    const [nome,setnome] = useState('');
    const [pessoa,setPessoa] = useState({nome: "", idade:""})
    const [visibilidade,setVisibilidade] = useState('block')

    const incrementar = () => {
        const novoContador = contador + 1
        setContador(novoContador)
    }

    const decrementar = () => {
        const novoContador = contador - 1
        setContador(novoContador)
    }

    const digitar = (e) => {
        setnome(e.target.value)
    }

    const digitarNome = (e) => {
        setPessoa({...pessoa,nome:e.target.value})
    }

    const digitarIdade = (e) => {
        setPessoa({...pessoa,idade:e.target.value})
    }

    const clickVisibilidade = () => {
        if(visibilidade === 'block'){
            setVisibilidade('none')
        }else{
            setVisibilidade('block')
        }
    }



    return(
        <div>
            <h1>Exercicio 1 - Contador</h1>
            <CaixaContador valor={contador} funcao1={incrementar} funcao2={decrementar}></CaixaContador>

            <h1>Exercicio 2 - Strings</h1>
            <CaixaStrings valor={nome} funcao1={digitar}></CaixaStrings>

            <h1>Exercicio 3 - Lista</h1>
            <CaixaLista></CaixaLista>
            
            <h1>Exercicio 4 - Objeto</h1>
            <CaixaObjeto event={digitarNome} event2={digitarIdade} valor={pessoa.nome} valor2={pessoa.idade}></CaixaObjeto>

            <h1>Exercicio 5 - Visibilidade</h1>
            <CaixaVisibilidade funcao={clickVisibilidade} valor={visibilidade}></CaixaVisibilidade>
        </div>
    )
}

export default Main
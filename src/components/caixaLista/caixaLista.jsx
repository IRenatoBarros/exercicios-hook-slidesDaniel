import style from './caixaLista.module.css'
import { useState } from 'react'


function CaixaLista() {
    const [lista, setLista] = useState([])

    const addItemLista = () => {
        const novoItem = `Item ${lista.length + 1}`;
        setLista([...lista, novoItem]);
    }

    return (
        <div id={style.principal}>
            <h1>Manipulação de Array</h1>
            <p className={style.botao} onClick={addItemLista}>Adicionar item</p>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default CaixaLista

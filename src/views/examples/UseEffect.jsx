import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, seNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [number2, setNumber2] = useState(0)
    const [status, setStatus] = useState("impar")

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        setStatus(number2 % 2 === 0 ? "par" : "impar")
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number} onChange={e => seNumber(e.target.value)} />
            </div> 
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">O número é: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" 
                    value={number2} onChange={e => setNumber2(e.target.value)}/>
            </div>   
        </div>
    )
}

export default UseEffect

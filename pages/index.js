import { useState } from 'react';
import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1><Link href="https://forms.gle/5t5PCAbAe1FxesrT6">Página de Inscrição</Link></h1>

            <Link href="/sobre">
                <a>Proejto Saber Aberto: Nordeste Cultural</a> 
            </Link>
            <Contador />
            
        </div>)
}

function Contador() {
    const [contador,setContador]= useState(1);
    function adicionarContador() {
        setContador(contador +1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Home

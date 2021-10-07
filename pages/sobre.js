import { useState } from 'react';
import Link from 'next/link';
function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>

            <Link href="/">
                <a>Home</a>
            </Link>
            <Contador />
        </div>)
}

function Contador() {
    const [contador, setContador] = useState(1);
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
export default Sobre
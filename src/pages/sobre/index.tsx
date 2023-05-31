import { Link } from "react-router-dom"

export function Sobre(){
    return (
        <div>
            <h1>Página Sobre!</h1>
            <br />
            <Link to="/">Home</Link>
            <br />
            <Link to="/produto">Produto</Link>
            <br />
            <Link to="/contato">Contatos</Link>
            <br />
            <Link to="/sobre">Sobre</Link>

        </div>
        )
}
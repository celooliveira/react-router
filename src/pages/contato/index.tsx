import { Link } from "react-router-dom"
export function Contato(){
    return(
        <div>
            <h1>Contato</h1>
            <h3>Fone: (88) 999-9999999</h3>

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
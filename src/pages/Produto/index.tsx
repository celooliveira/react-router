import { Link, useParams } from "react-router-dom"

export function Produto(){
    const {id} = useParams();
    return (
        <div>
            <h1>Produto</h1>
            <h3>Bem vindo a Página do Produto {id}!</h3>
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
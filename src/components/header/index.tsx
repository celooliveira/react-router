import { Link } from "react-router-dom"
import './header.css';

export function Header(){
    return (
        <header>
            <h2>Uso de rotas</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/produto">Produto</Link>
                <Link to="/contato">Contatos</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </header>
    )
}
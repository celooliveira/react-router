import { Link } from "react-router-dom"
export function NotFound(){
    return (
        <div>
            <h1>Ops, essa página não extiste!</h1>

            <Link to="/">Voltar a Home</Link>
        </div>
    ) 
}
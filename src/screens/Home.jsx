import { Link } from 'react-router-dom'; 

export default function Home() {
return(

    <header>
        <nav>
            <ul>
            <li><Link to ="/buscar-cep"> Pesquisar um CEP </Link></li>
            <li><Link to ="/fotos-cachorros"> Veja cachorrinhos </Link></li>
            </ul>
        </nav>
    </header>
)
}
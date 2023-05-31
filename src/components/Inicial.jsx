import { Logo } from './Logo'
import { Header } from './Header'
import { Formulario } from './Formulario'
import fundoRoxo from '../images/fundo-roxo.png'
import '../styles/Inicial.css'

export function Inicial() {
    return (
        <section>
            <div className="tela">
                <Logo />
                <Header />
                <Formulario />
            </div>
            <div>
                <img src={fundoRoxo} alt="imagem com fundo roxo" className="roxa" />
            </div>
        </section>
    )
}
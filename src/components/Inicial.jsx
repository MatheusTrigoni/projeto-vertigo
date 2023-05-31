import { Logo } from './Logo'
import { Header } from './Header'
import { Formulario } from './Formulario'
import '../styles/Inicial.css'

export function Inicial() {
    return (
        <section>
            <Logo />
            <Header />
            <Formulario />
        </section>
    )
}
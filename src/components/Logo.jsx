import logo from '../images/logo.png'
import V from '../images/V.png'
import e from '../images/e.png'
import r from '../images/r.png'
import t from '../images/t.png'
import i from '../images/i.png'
import g from '../images/g.png'
import o from '../images/o.png'
import '../styles/Logo.css'

export function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="imagem da logo" />
            <img src={V} alt="V" />
            <img src={e} alt="e" />
            <img src={r} alt="r" />
            <img src={t} alt="t" />
            <img src={i} alt="i" />
            <img src={g} alt="g" />
            <img src={o} alt="o" />
        </div>
    )
}
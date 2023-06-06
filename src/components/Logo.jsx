import logo from '../images/logo.png'
import '../styles/Logo.css'

export function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    )
}
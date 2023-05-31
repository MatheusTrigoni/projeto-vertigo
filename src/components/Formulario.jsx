import '../styles/Formulario.css'

export function Formulario() {
    return (
        <div className="formulario">
            <form action="" id="form-inicial">
                <div>
                    <label htmlFor="email" className="cinza-escuro">E-mail</label>
                </div>
                <div>
                    <input id="email" type="text" placeholder="Digite seu e-mail" />
                </div>

                <div>
                    <label htmlFor="senha" className="cinza-escuro">Senha</label>
                    <p className="paragrafo-label">Esqueceu a senha?</p>
                </div>
                <div>
                    <input id="senha" type="text" placeholder="Digite sua senha" />
                </div>
            </form>

            <div>
                <button type="submit" form="form-inicial"></button>
            </div>

            <div>
                <p className="cinza">Ainda não tem uma conta?</p>
                <button type="button">Inscreva-se</button>
            </div>
        </div>
    )
}
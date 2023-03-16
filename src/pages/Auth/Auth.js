import LoginForm from "../../Components/Auth/LoginForm";

const Auth = () => {

    return (
        <div className="auth">
            <div className="container">
                <div className="card">
                    <div className="container-label">Iniciar Sesion<span></span></div>

                    <div className="container-icon">
                        <div className="circle">
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>

                    <div className="container-form">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Auth
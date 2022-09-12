import React from 'react'
import { useNavigate } from "react-router";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import '../../styles/header.css'
const Header = () => {
    const [name, setName] = useLocalStorage("username");
    const navigate = useNavigate();
    const logout = () => {
        setName('')
        navigate('/', { replace: true });
    }
    
    return (
        <div style={{width: '100%', marginBottom: '20px'}}>
            <header className="header-login-signup">

                <div className="header-limiter">

                    <h1><span>SySAid - Calculator app</span></h1>

                    <nav>
                        <span>{name}</span>
                    </nav>

                    <ul>
                        <li><span>Login</span></li>
                        <li>
                            <span style={{ cursor: 'pointer' }} onClick={logout}>
                                Logout
                            </span>
                        </li>
                    </ul>

                </div>

            </header>
        </div>
    );
}

export default Header
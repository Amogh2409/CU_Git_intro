import React, { useState } from 'react'

const RegisterPage = ({ setCurrentPage }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleRegister = (e) => {

        e.preventDefault();


        setTimeout(() => { }, 500)
    }

    return (
        <div className='auth-container'>
            <h2>Create a New Account</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Register</button>

            </form>

            {message && (<p className={message.includes('successful') ? "success" : "error"}>{message}</p>)}

            <p className="switch-link">
                Already have an account?
                <button onClick={() => setCurrentPage('login')}>
                    Login here
                </button>

            </p>


        </div>
    )
}

export default RegisterPage

import React from 'react'

const LoginPage = ({setCurrentPage, setLoggedIn, setCurrentUser}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');


    const handleLogin =(e) => {
        e.preventDefault();

        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(u => u.email === email && u.password === password);


            if(user){
                setMessage('Login successful!');
                setLoggedIn(true);
                setCurrentUser(user);
            }
            else{
                setMessage('Invalid email or password. Please try again.');
            }
        }, 500)
    }
  return (
    <div className="auth-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </form>

        {message && (<p className={message.includes('successful') ? "success" : "error"}> {message} </p>)}



        <p className="switch-link">
        Don't have an account? 
        <button onClick={() => setCurrentPage('register')}>
          Register here
        </button>
      </p>

    </div>
  )
}

export default LoginPage

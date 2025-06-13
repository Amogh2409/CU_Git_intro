import React, { useState } from 'react'

const RegisterPage = ({ setCurrentPage }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


  const handleRegister = (e) => {
    e.preventDefault();
    
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if email exists
      if (users.some(u => u.email === email)) {
        setMessage('Email already registered');
        return;
      }
      
      // Create new user
      const newUser = { 
        id: Date.now(), 
        name, 
        email, 
        password, 
        books: [] 
      };
      
      // Update users array
      users.push(newUser);
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(users));
      
      setMessage('Registration successful! You can now login.');
      
      // Reset form
      setName('');
      setEmail('');
      setPassword('');
    }, 500);
  };

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

// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';  // Use js-cookie to easily get CSRF token from cookies

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Helper function to get the CSRF token from cookies
  const getCSRFToken = () => {
    return Cookies.get('csrftoken');  // Assuming Django sets the CSRF token in the 'csrftoken' cookie
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrftoken = getCSRFToken();  // Get CSRF token from cookies
    try {
      const response = await axios.post(
        'http://localhost:8000/login/', 
        { username, password },
        {
          headers: {
            'X-CSRFToken': csrftoken,  // Include the CSRF token in the request headers
          }
        }
      );
      localStorage.setItem('token', response.data.access); // Save the JWT token
      router.push('/profile');  // Redirect to profile page
    } catch (err) {
      setError('Credenziali non valide');  // Set an error message for invalid credentials
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome utente"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

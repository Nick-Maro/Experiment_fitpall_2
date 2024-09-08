import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Profile() {
  const [userData, setUserData] = useState(null); // Stato per i dati dell'utente
  const [loading, setLoading] = useState(true);   // Stato per il caricamento
  const [error, setError] = useState(null);       // Stato per eventuali errori
  const router = useRouter();

  useEffect(() => {
    // Funzione per recuperare i dati del profilo dal backend
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');  // Ottieni il token dal localStorage

      if (!token) {
        setError('Devi effettuare il login.');
        setLoading(false);
        router.push('/login');  // Reindirizza alla pagina di login se non autenticato
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/profile/', {  // URL del backend
          headers: {
            Authorization: `Bearer ${token}`,  // Passa il token JWT nell'header
          },
        });
        setUserData(response.data); // Imposta i dati utente nello stato
      } catch (err) {
        setError('Errore nel recupero dei dati del profilo');
      } finally {
        setLoading(false); // Disabilita il caricamento
      }
    };

    fetchProfile(); // Esegui la funzione appena il componente viene montato
  }, [router]);

  if (loading) return <p>Caricamento...</p>;  // Mostra un messaggio di caricamento
  if (error) return <p>{error}</p>;           // Mostra un eventuale errore

  return (
    <div className="container">
      <h1>Profilo Utente</h1>
      {userData && (
        <div>
          <p><strong>Nome utente:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Età:</strong> {userData.age ? userData.age : 'Non specificato'}</p>
          <p><strong>Peso:</strong> {userData.weight ? userData.weight + ' kg' : 'Non specificato'}</p>
        </div>
      )}
    </div>
  );
}

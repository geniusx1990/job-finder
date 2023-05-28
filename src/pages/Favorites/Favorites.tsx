import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import VaccanciesFavorite from '../../components/VaccanciesFavorite/VaccanciesFavorite';
import './favorites.css';
import { APIData } from '../../api/api';

function Favorites() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const Authorization = () => {
      fetch(
        `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=${APIData.login}&password=${APIData.password}&client_id=${APIData.client_id}&client_secret=${APIData.client_secret}`,
        {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
          },
        }
        )
        .then((response) => response.json())
        .then((data) => {
          setAccessToken(data.access_token);
        })
        .catch((error) => {
          console.error('Error fetching access token:', error);
        });
    };

    Authorization();
  }, []);

  return (
    <>
    <Header />
    <VaccanciesFavorite accessToken={accessToken} />
    </>
  );
}

export default Favorites;

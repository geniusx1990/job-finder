import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import { APIData } from '../../api/api';
import Find from '../../components/Find/Find';
import './index.css';
import Vaccancies from '../../components/Vaccancies/Vaccancies';

export function Welcome() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const Authorization = () => {
      setIsLoading(true); // Set loading state to true
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
          console.log(data);
          setAccessToken(data.access_token);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching access token:', error);
          setIsLoading(false);
        });
    };

    Authorization();
  }, []);

  if (!isLoading) {
    return (
      <>
      <Header />
      <div className="main">
        <Filters accessToken={accessToken} keyword={keyword} />
       <div className="vacancies__block">
        <Find keyword={keyword} setKeyword={setKeyword} />
        <Vaccancies accessToken={accessToken} />
       </div>
      </div>
      </>
    );
  }
    return <Loader />;
}

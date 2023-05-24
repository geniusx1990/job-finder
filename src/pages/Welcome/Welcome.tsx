import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import { APIData } from '../../api/api';
import Find from '../../components/Find/Find';
import './index.css';
import Vacancies from '../../components/Vacancies/Vacancies';

export function Welcome() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState('');
  const [filterInputValueFrom, setFilterInputValueFrom] = useState<number | ''>('');
  const [filterInputValueTo, setFilterInputValueTo] = useState<number | ''>('');
  const [filterSelectedOption, setFilterSelectedOption] = useState<string | ''>('');
  const [resetKey, setResetKey] = useState<number>(0);

  useEffect(() => {
    const Authorization = () => {
      setIsLoading(true);
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
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching access token:', error);
          setIsLoading(false);
        });
    };

    Authorization();
  }, []);

  const handleApplyFilters = (inputValueFrom: number | '', inputValueTo: number | '', selectedOption: string | '') => {
    setFilterInputValueFrom(inputValueFrom);
    setFilterInputValueTo(inputValueTo);
    setFilterSelectedOption(selectedOption);
  };

  const handleResetFilters = () => {
    setFilterInputValueFrom('');
    setFilterInputValueTo('');
    setFilterSelectedOption('');
    setResetKey((prevKey) => prevKey + 1);
  };

  if (!isLoading) {
    return (
      <>
      <Header />
      <div className="main">
        <Filters
          accessToken={accessToken}
          keyword={keyword}
          onApply={handleApplyFilters}
          onReset={handleResetFilters}
        />
       <div className="vacancies__block">
        <Find keyword={keyword} setKeyword={setKeyword} />
        <Vacancies
          accessToken={accessToken}
          keyword={keyword}
          onApply={handleApplyFilters}
          inputValueFrom={filterInputValueFrom}
          inputValueTo={filterInputValueTo}
          selectedOption={filterSelectedOption}
          key={resetKey}
        />
       </div>
      </div>
      </>
    );
  }
    return <Loader />;
}

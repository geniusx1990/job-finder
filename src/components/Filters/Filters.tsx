import React, { useEffect, useState } from 'react';
import { Button, Container, NumberInput, Select } from '@mantine/core';
import './filters.css';
import { CatalogItem, CatalogueResponse } from '../../interfaces';

interface FiltersProps {
  accessToken: string | null;
  keyword: string;
}

function Filters({ accessToken, keyword }: FiltersProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    console.log(value);
  };

  const [inputValueFrom, setInputValueFrom] = useState<number | ''>('');

  const handleChangeFrom = (value: number | '') => {
    if (value !== '' && (typeof value === 'number' && value >= 0)) {
      setInputValueFrom(value);
      console.log(value);
    }
  };

  const [inputValueTo, setInputValueTo] = useState<number | ''>('');
  const handleChangeTo = (value: number | '') => {
    if (value !== '' && (typeof value === 'number' && value >= 0)) {
      setInputValueTo(value);
      console.log(value);
    }
  };

  const [catalog, setCatalog] = useState<CatalogueResponse>([]);

  useEffect(() => {
    const Catalogues = () => {
      fetch(
        'https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/',
        {
          headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            Authorization: `Bearer ${accessToken}`,
          },
        }
        )
        .then((response) => response.json())
        .then((data: CatalogueResponse) => {
          console.log(data);
          setCatalog(data);
        })
        .catch((error) => {
          console.error('Error fetching access token:', error);
        });
    };

    Catalogues();
  }, []);

  useEffect(() => {
    console.log('keyword:', keyword);
  }, [keyword]);

  return (
    <Container className="filters_component" size="315px" style={{ marginBottom: '20px', border: 'solid 2px #EAEBED', borderRadius: '12px', padding: '20px', margin: '0', height: '300px', backgroundColor: '#FFFFFF' }}>
      <div className="header__container">
        <h2 className="component__title">Фильтры</h2>
            <Button className="button">Сбросить все x</Button>
      </div>

      <div className="filters">
      <h2 className="filters_title">Отрасль</h2>
      <Select
        className="filter__select"
        data={catalog.map((item: CatalogItem) => ({
          value: item.key,
          label: item.title_rus,
        }))}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder="Выберите отрасль"
      />
    <h2 className="filters_title">Оклад</h2>
    <NumberInput
      className="price_from"
      placeholder="От"
      value={inputValueFrom}
      onChange={handleChangeFrom}
    />
    <NumberInput
      className="price_to"
      placeholder="До"
      value={inputValueTo}
      onChange={handleChangeTo}
    />
      <Button className="apply">Применить</Button>
      </div>

    </Container>
  );
}

export default Filters;

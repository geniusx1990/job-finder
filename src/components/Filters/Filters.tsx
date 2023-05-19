import React, { useState } from 'react';
import { Button, Container, Input, NumberInput, Select, Slider } from '@mantine/core';
import './filters.css'

function Filters() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };




  const [inputValue, setInputValue] = useState<number | ''>('');

  const handleChange = (value: number | '') => {
    if (value !== '' && (typeof value === 'number' && value >= 0)) {
      setInputValue(value);
    }
  };
  return (
    <Container className='filters_component' size="315px" style={{ marginBottom: '20px', border: 'solid 2px #EAEBED', borderRadius: '12px', padding: '20px', margin: '0'}}>
      <div className='header__container'>
        <h2 className='component__title'>Фильтры</h2>
            <Button className='button'>Сбросить все x</Button>
      </div>

      <div className='filters'>
      <h2 className='filters_title'>Отрасль</h2>
      <Select
        className='filter__select'
        data={['Option 1', 'Option 2', 'Option 3']}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder="Выберите отрасль"
      />
    <h2 className='filters_title'>Оклад</h2>
    <NumberInput 
    className='price_from'
     placeholder="От"
     value={inputValue}
     onChange={handleChange}
     >
    </NumberInput>
    <NumberInput 
    className='price_to'
     placeholder="До"
     value={inputValue}
     onChange={handleChange}
     >
    </NumberInput>
    <Button className='apply'>Применить</Button>

      </div>
      
    </Container>
  );
}

export default Filters;

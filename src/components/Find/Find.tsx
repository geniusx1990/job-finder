/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Container, Input } from '@mantine/core';
import './find.css';
import { useState } from 'react';

interface SearchBarProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

function Find({ keyword, setKeyword }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const test = () => {
    setKeyword(searchValue);
  };

    return (
        <Container className="find_component">
          <div className="search-container">
            <svg className="image" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.468 10.468L13.5714 13.5714M12.0924 6.54622C12.0924 9.60931 9.60931 12.0924 6.54622 12.0924C3.48313 12.0924 1 9.60931 1 6.54622C1 3.48313 3.48313 1 6.54622 1C9.60931 1 12.0924 3.48313 12.0924 6.54622Z" stroke="#ACADB9" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <Input
              className="finder"
              data-elem="search-input"
              placeholder="Введите название вакансии"
              type="text"
              value={searchValue}
              onChange={handleKeywordChange}
              styles={{
          input: {
            border: 'none',
            padding: '0px',
            width: '216px',
          },
        }}
            />
          </div>
          <Button className="find_button" data-elem="search-button" onClick={test}>Поиск</Button>
        </Container>
);
}

export default Find;

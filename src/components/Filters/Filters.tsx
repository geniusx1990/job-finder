import React, { useState } from 'react';
import { Container, Select, Slider } from '@mantine/core';

function Filters() {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 100]);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (values: string[]) => {
    setSelectedCheckboxes(values);
  };

  const handleSliderChange = (value: [number, number]) => {
    setSliderValue(value);
  };

  return (
    <Container size="md" style={{ marginBottom: '20px' }}>
      <h2>Filters</h2>
      <Select
        data={['Option 1', 'Option 2', 'Option 3']}
        value={selectedOption}
        onChange={handleOptionChange}
        placeholder="Select an option"
      />

      <Slider
        min={0}
        max={100}
        label="Slider"
      />
    </Container>
  );
}

export default Filters;

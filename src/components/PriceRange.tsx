import React from 'react';
import { TextInput } from '@mantine/core';
import { IconTag } from '@tabler/icons-react';

const PriceRange: React.FC = () => {
  return (
    <TextInput
      label='Price range'
      placeholder='Set preferred price'
      icon={<IconTag size={14} />}
    />
  );
};

export default PriceRange;

import React from 'react';
import { Title, Text, Center, Group } from '@mantine/core';
import PhoneBrands from '../components/PhoneBrands';
import PriceRange from '../components/PriceRange';

const Bahay: React.FC = () => {
  return (
    <>
      <Title order={1} ta='center' mt={100} color='blue'>
        Recommend a phone thru games.🕹️
      </Title>
      <Text ta='center'>
        Get a phone recommendation thru the games you want to play.
      </Text>

      <Center mt={50}>
        <Group spacing='xs'>
          <PhoneBrands />
          <PriceRange />
        </Group>
      </Center>
    </>
  );
};

export default Bahay;

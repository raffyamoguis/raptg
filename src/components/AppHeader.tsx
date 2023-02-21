import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Group, Image, Anchor } from '@mantine/core';
import logo from '../assets/logo.png';

const AppHeader: React.FC = () => {
  return (
    <Group position='apart' py='lg'>
      <Image src={logo} alt='Raptg logo.' width={100} />
      <Anchor to='/about' component={Link}>
        <Text>About</Text>
      </Anchor>
    </Group>
  );
};

export default AppHeader;

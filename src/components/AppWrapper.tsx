import React from 'react';
import { Container } from '@mantine/core';

interface Props {
  children: JSX.Element;
}
const AppWrapper: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppWrapper;

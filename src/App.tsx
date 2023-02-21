import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppWrapper from './components/AppWrapper';
import About from './page/About';
import Bahay from './page/Bahay';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Roboto, sans-serif',
        headings: { fontFamily: 'Roboto, sans-serif' },
      }}
    >
      <AppWrapper>
        <>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Bahay />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </>
      </AppWrapper>
    </MantineProvider>
  );
}

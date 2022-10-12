// react
import { FC, ReactNode } from 'react';

// material ui
import { CssBaseline, Box, Container } from '@mui/material/';

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ height: '100vh' }}>
          { children }
        </Box>
      </Container>
    </>
  );
};

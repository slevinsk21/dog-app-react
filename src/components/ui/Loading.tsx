// material ui
import { Box, Typography, CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 200
      }}
    >
      <CircularProgress />

      <Typography variant='h6' sx={{ textAlign: 'center', margin: '15px' }}>
        Cargando...
      </Typography>
    </Box>
  );
};

// react
import { useState } from 'react';

// material ui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// components
import { MainLayout, Loading } from './components/ui';
import { SelectBreeds, CardBreed, CardSubBreed } from './components/breed';

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// global styles
import './App.css';

// api
import { getBreedByName } from './api/breedApi';

// interfaces
import { AutocompleteBreedsWithSubBreeds, Breed, SubBreedByBreedName } from './interfaces';

// config theme
const theme = createTheme({
  palette: { mode: 'dark' }
});

const initialSubBreed = {
  breedName: '',
  subBreedName: '',
  image: ''
};

function App() {
  const [breed, setBreed] = useState<Breed>();
  const [subBreed, setSubBreed] = useState<SubBreedByBreedName>();
  const [loading, setLoading] = useState(false);

  const setBreedName = async ({ label, subBreeds }: AutocompleteBreedsWithSubBreeds) => {
    try {
      setLoading(true);

      if (label) {
        const breed = await getBreedByName(label);
        setBreed({ ...breed, subBreeds });
        setSubBreed(initialSubBreed);
      }
    } catch (e) {
      console.error('Error: ( cmp ) =>', e);
    } finally {
      setLoading(false);
    }
  };

  const showSubBreed = (subBreed: SubBreedByBreedName) => {
    setSubBreed(subBreed)
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <SelectBreeds setBreedName={setBreedName} />

        {
          loading
            ? <Loading />
            : breed && <CardBreed breed={breed} showSubBreed={showSubBreed} />
        }

        { subBreed && <CardSubBreed subBreed={subBreed} /> }
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;

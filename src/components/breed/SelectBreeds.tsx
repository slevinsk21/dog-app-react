// react
import { useState, useEffect, FC } from 'react';

// material ui
import { Autocomplete, TextField } from '@mui/material';

// api
import { getAllBreeds } from '../../api/breedApi';

// interface
interface Props {
  setBreedName: Function;
}

// initial state
const initialBreeds = [ { label:  'affenpinscher', subBreeds: [] } ];

export const SelectBreeds: FC<Props> = ({ setBreedName }) => {
  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    getBreeds();
  }, []);

  const getBreeds = async () => {
    try {
      const breeds = await getAllBreeds();

      const responseSubBreeds = Object.keys(breeds).map(breed => ({
        label: breed,
        subBreeds: breeds[breed]
      }));

      setBreeds(responseSubBreeds);

    } catch (e) {
      console.error('Error: ( cmp ) =>', e);
    }
  };

  return (
      <Autocomplete
        id='combo-box-demo'
        disablePortal
        autoHighlight
        options={breeds}
        sx={{ minWidth: 300, padding: '15px 0' }}
        renderInput={params => <TextField {...params} label='Razas' />}
        onChange={(e, newValue) => newValue !== null && setBreedName(newValue)}
      />
  );
};

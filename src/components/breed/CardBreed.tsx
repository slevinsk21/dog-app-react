// react
import { FC, useState } from 'react';

// material ui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography
} from '@mui/material/';

// api
import { getSubBreedByName } from '../../api/breedApi';

// interfaces
import { Breed, SubBreedByBreedName } from '../../interfaces';

interface Props {
  breed: Breed;
  showSubBreed: Function;
}

const initialSubBreed = {
  breedName: '',
  subBreedName: '',
  image: ''
};

export const CardBreed: FC<Props> = ({ breed, showSubBreed }) => {
  const [subBreed, setSubBreed] = useState<SubBreedByBreedName>();
  const { name, image, subBreeds = [] } = breed;

  const selectSubBreed = async (subBreedName: string) => {
    try {
      if (subBreed?.subBreedName === subBreedName ) {
        showSubBreed(initialSubBreed);
        setSubBreed(initialSubBreed);
        return;
      }

      const subBreedData = await getSubBreedByName(name, subBreedName);
      showSubBreed(subBreedData);
      setSubBreed(subBreedData);
    } catch (e) {
      console.error('Error: ( cmp ) => ', e);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card className='card-breed'>
        <CardMedia
          component='img'
          className='card-breed-img'
          image={ image }
          alt={`${name}-img`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography
              component='div'
              variant='h5'
              sx={{ textTransform: 'capitalize' }}
            >
              { name }
            </Typography>
            {subBreeds.length > 0 && (
              <Box
                sx={{
                  isplay: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '12px 0'
                }}
              >
                <Typography variant='subtitle1'>Tipos de sub-razas:</Typography>

                {
                  subBreeds.map((item: string) => (
                    <Chip
                      key={ item }
                      label={ item }
                      color='primary'
                      onClick={ () => selectSubBreed(item) }
                      variant={ subBreed?.subBreedName === item ? 'filled' : 'outlined' }
                      sx={{ margin: 1, textTransform: 'capitalize' }}
                    />
                  ))
                }
              </Box>
            )}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

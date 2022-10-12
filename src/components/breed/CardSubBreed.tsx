// react
import { FC } from 'react';

// material ui
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material/';

// interfaces
import { SubBreedByBreedName } from '../../interfaces';

interface Props {
  subBreed: SubBreedByBreedName;
}

export const CardSubBreed: FC<Props> = ({ subBreed }) => {
  const { breedName, subBreedName, image } = subBreed;

  return (
    <>
      {
        subBreedName && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              className='card-sub-breed'
              sx={{ margin: 2 }}
              variant='outlined'
            >
              <Avatar
                src={ image }
                alt={ `${subBreedName}-img` }
                sx={{ width: 60, height: 60, margin: 2 }}
              />
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  component='p'
                  variant='h6'
                  sx={{ textTransform: 'capitalize' }}
                >
                  { breedName } • { subBreedName }
                </Typography>
              </CardContent>
            </Card>
          </Box>
        )
      }
    </>
  );
};

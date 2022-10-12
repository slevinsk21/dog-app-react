// interfaces
import { Breed, ResponseDataBreed, SubBreedByBreedName } from '../interfaces';

// URL BASE API
const URL_API = 'https://dog.ceo/api/';

const validResponse = (response: Response) => {
  if (!response.ok) {
    const { url, status, statusText } = response;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }
};

// all breeds list
export const getAllBreeds = async () => {
  try {
    const response = await fetch(`${URL_API}breeds/list/all`);

    validResponse(response);

    const data = await response.json();

    return data.message;
  } catch (e) {
    throw Error(`Error: : ( API ) => ${e}`);
  }
};

// get breed by name
export const getBreedByName = async (breedName: string): Promise<Breed> => {
  try {
    const response = await fetch(`${URL_API}breed/${breedName}/images/random`);

    validResponse(response);

    const data: ResponseDataBreed = await response.json();

    return {
      name: breedName,
      image: data.message
    };
  } catch (e) {
    throw Error(`'Error: ( API ) =>', e`);
  }
};

// get sub-breed by name
export const getSubBreedByName = async (breedName: string, subBreedName: string): Promise<SubBreedByBreedName> => {
  try {
    const response = await fetch(`${URL_API}breed/${breedName}/${subBreedName}/images/random`);

    validResponse(response);

    const data: ResponseDataBreed = await response.json();

    return {
      breedName,
      subBreedName,
      image: data.message
    };
  } catch (e) {
    throw Error(`'Error: ( API ) =>', e`);
  }
};
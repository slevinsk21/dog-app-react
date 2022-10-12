export interface ResponseDataBreed {
  message: string;
  status: string;
}
export interface Breed {
  name: string;
  image: string;
  subBreeds?: string[];
}
export interface SubBreedByBreedName {
  breedName: string;
  subBreedName: string;
  image: string;
}
export interface AutocompleteBreedsWithSubBreeds {
  label: string;
  subBreeds: string[];
}

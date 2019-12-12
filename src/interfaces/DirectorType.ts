import { MovieType } from './MovieType';

export interface DirectorType {
  id?: string;
  name: string;
  age: number;
  movies?: MovieType[];
}

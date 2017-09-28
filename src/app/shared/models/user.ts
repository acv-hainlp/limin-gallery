import { Album } from './album';

export interface User {
    name: string,
    email: string,
    photoUrl: string,

    albums: Album[]
}
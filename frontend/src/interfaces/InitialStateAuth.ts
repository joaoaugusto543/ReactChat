import { UserInterface } from './UserInterface';

export interface InitialStateAuth{
    user:UserInterface | null,
    token:string | null,
    loading:boolean,
    error:string | string[] | null | unknown

} 
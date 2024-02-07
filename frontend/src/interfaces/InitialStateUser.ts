import { UserInterface } from './UserInterface';

export interface InitialStateUser{
    user:UserInterface | null,
    users:UserInterface[] | null,
    loading:boolean,
    error:string | string[] | null | unknown,
    success:boolean

} 
import { UserInterface } from './UserInterface';
import { UserCodeInterface } from './UserCodeInterface';
import { ContactInterface } from './ContactInterface';

export interface InitialStateUser{
    user:UserInterface | null,
    userCode:UserCodeInterface | null,
    contact:null | ContactInterface
    loading:boolean,
    error:string | string[] | null | unknown,
    success:boolean

} 
import { ContactInterface } from "./ContactInterface";

export interface UserInterface{
    id:string,
    name:string,
    profileImage:string,
    email:string,
    code:string,
    contacts:ContactInterface[]
}
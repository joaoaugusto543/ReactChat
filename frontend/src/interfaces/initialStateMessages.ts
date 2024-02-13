import { MessageInterface } from './MessageInterface'

export interface InitialStateMessages{
    messages:MessageInterface[],
    loading:boolean,
    error:string | string[] | null | unknown
}
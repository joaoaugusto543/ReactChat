import { MessageGroupInterface } from './MessageGroupInterface'

export interface initialStateMessageGroup{
    messages:MessageGroupInterface[],
    loading:boolean,
    error:string | string[] | null | unknown
}
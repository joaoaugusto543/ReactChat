import { notificationInterface } from './notificationInterface'

export interface InitialStateNotification{
    notifications:notificationInterface[],
    loading:boolean,
    error:null | string[] | string | unknown
}
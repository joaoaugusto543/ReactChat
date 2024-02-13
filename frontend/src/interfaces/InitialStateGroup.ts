import { GroupInterface } from './GroupInterface'

export interface InitialStateGroup{
    myGroups:GroupInterface[],
    groupsPublics:GroupInterface[],
    group:GroupInterface | null,
    loading:boolean,
    error:string | string[] | null | unknown

} 
import { GroupInterface } from './GroupInterface'

export interface InitialStateGroup{
    myGroups:GroupInterface[],
    groupsPublics:GroupInterface[],
    group:GroupInterface | null,
    success:boolean,
    loading:boolean,
    error:string | string[] | null | unknown

} 
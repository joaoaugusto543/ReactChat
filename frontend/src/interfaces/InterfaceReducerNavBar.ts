enum TabActionKind {
    CONTACT = 'CONTACT',
    GROUPS = 'GROUPS',
    ADD_CONTACT = 'ADD_CONTACT',
    NOTIFICATION = 'NOTIFICATION'
}

export interface TabAction {
    type: TabActionKind;
    payload: string
}

export interface TabState {
    placeholder: string;
    tab:string
}
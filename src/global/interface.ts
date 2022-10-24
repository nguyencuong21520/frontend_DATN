export interface Action {
    type: string,
    payload: string
}
export interface Obj {
    [key: string]: any
}
export interface User {
    Role: string;
    username?: string;
    email?: string;
}
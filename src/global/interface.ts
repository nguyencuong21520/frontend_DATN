export interface Action {
    type?: string;
    payload?: Record<string, unknown> | Obj | null;
    componentId?: string;
}
export interface Obj {
    [key: string]: any
}
export interface User {
    Role: string;
    username?: string;
    email?: string;
}
interface UserInterface {
    email: string,
    id_no: number,
    name: string,
    address: string
}

type PartialUserType<T> = {
    [P in keyof T]?: T[P];
}

type OptionalUser = PartialUserType<UserInterface>


let User: OptionalUser = {
    name: 'sai'
}

type RequiredUserType<T> = {
    [P in keyof T]: T[P]
}

type RequiredUser = RequiredUserType<UserInterface>

let newUser: RequiredUser = {
    name: 'sai',
    email: '2121',
    id_no: 12,
    address: 'hshiuha'
}


type ReadOnlyUserType<T> = {
    readonly [P in keyof T]: T[P]
}

type PickUtilType<T, K extends keyof T> = {
    [P in K]: T[P]
}

type UserUtil = PickUtilType<UserInterface, 'address' | 'email'>

type ExcludeUtilType<T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

type UserExcludeUtil = ExcludeUtilType<UserInterface, 'address' | 'email'>

const excludedUtil: UserExcludeUtil = {
    name: 'sai',
    id_no: 121
}
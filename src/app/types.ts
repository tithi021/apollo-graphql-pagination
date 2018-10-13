
export type User = {
    id: number,
    name: string
}

export type Query = {
    users: User[]
}

export type Mutation = {
    addUser: User,
    removeUser: User,
    updateUser: User
}
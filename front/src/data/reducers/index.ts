import user, { UserState } from './user'
import loggedIn from './loggedIn'

export const reducer = {
    user,
    loggedIn
}

export interface RootState {
    user: UserState
    loggedIn: boolean
}

import { AnyAction } from 'redux'
import { TypeKeys } from '../ActionTypes'

// import ApiService from '../services/ApiService'
// import { Dispatch } from 'react-redux'
import { User } from '../../interfaces/user'

export const setUser = (user: User): AnyAction => ({
    type: TypeKeys.SET_USER,
    data: {
        user
    }
})

// export const fetchUser = () => {
//     return async (dispatch: Dispatch<Function>) => {
//         const user = await ApiService.getCurrentUser()
//         dispatch(setUser(user))
//     }
// }

// export const userLoggedOut = () => ({
//     type: TypeKeys.USER_LOGGED_OUT
// })

export const userLoggedIn = () => ({
    type: TypeKeys.USER_LOGGED_IN
})

// export const keepAlive = () => {
//     return async (dispatch: Dispatch<Function>) => {
//         const alive = await ApiService.keepAlive()
//         if (!alive.success && alive.status === 401) {
//             dispatch(userLoggedOut())
//         } else if (alive.success) {
//             dispatch(userLoggedIn())
//         }
//     }
// }

import {
    applyMiddleware,
    createStore,
    combineReducers,
    Middleware,
    Store
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// Reducers
import { reducer, RootState } from './reducers/index'

const middlewares: Middleware[] = [thunk]

if (process.env.NODE_ENV !== 'production' && process.env.APP_ENV !== 'test') {
    const loggerMiddleware = createLogger({ collapsed: true, diff: true })
    middlewares.push(loggerMiddleware)
}

export default function configureStore(
    initialState?: RootState
): Store<any> {
    const reducers = combineReducers(reducer)
    const composeEnhancers = composeWithDevTools({})

    return createStore(
        reducers,
        composeEnhancers(applyMiddleware(...middlewares))
    )
}

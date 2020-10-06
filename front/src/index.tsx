import * as React from 'react'
// import bugsnagProvider from './bugsnag'

// let ErrorBoundary: any = null
// if (process.env.NODE_ENV === 'production') { // initialize bugsnag ASAP, before other imports
// const bugsnag = require('bugsnag-js')
// const createPlugin = require('bugsnag-react')
// const bugsnagClient = bugsnag({
//     apiKey: 'b011772cf67402acb8a64e2d3daec6f2',
//     appVersion: '0.0.1',
//     releaseStage: 'development'
// })

// ErrorBoundary = bugsnagClient.use(createPlugin(React))
// bugsnagProvider.setBugsnag(bugsnagClient)
// }

import { Provider } from 'react-redux'
import store from './data/store'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

let component = <App/>
// if (ErrorBoundary != null) {
//     component = (
//         <ErrorBoundary>
//             <App />
//         </ErrorBoundary>
//     )
// } else {
//     component = (
//         <App />
//     )
// }

ReactDOM.render(
    <Provider store={store}>
        {component}
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
import * as React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginContainer from './components/login/Login'
import Main from './views/main'
// import 'fontsource-roboto'

interface State {
  loggedScreen: boolean
}

class App extends React.Component {
  state: State = {
    loggedScreen: false
  }

  componentWillMount() {
    this.localStorageLogged()
  }

  public isLogged(isLogged: boolean): void {
    // var isLoggedString: string = String(isLogged)
    // localStorage.setItem('session', isLoggedString)

    this.setState({ loggedScreen: isLogged })
  }

  public localStorageLogged(): void {
    if ( localStorage.getItem('session') !== null ) {
      return this.setState({ loggedScreen: true })
    }
  }
  
  public render() {
    const { loggedScreen } = this.state
    this.isLogged = this.isLogged.bind(this)
   
    return (
      loggedScreen ? <Main isLogged={this.isLogged}/> : <LoginContainer isLogged={this.isLogged}/>
    )
  }
}

export default App
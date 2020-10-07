import * as React from 'react'
import { Col, Container, Form, Row } from 'reactstrap'
import Button from '@material-ui/core/Button'
import ApiService from '../../data/services/ApiService'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles'
import './style.css'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import Tooltip from '@material-ui/core/Tooltip'
import Lock from '@material-ui/icons/Lock'
import Person from '@material-ui/icons/Person'
import { styleJson } from './style'

const styles = styleJson()

interface Props {
    // userLoggedIn: () => AnyAction
    isLogged: Function
    classes: any
}

interface State {
    username: string
    password: string
    openSnackBar: boolean
    mensajeSnackBar: string
}

class Login extends React.Component<Props> {
    state: State = {
        username: '',
        password: '',
        openSnackBar: false,
        mensajeSnackBar: ''
    }

    public handleOnKeyPress(key: any): void {
        if (key.key === 'Enter') {
            this._login()
        }
    }
    public handleClick = () => {
        this.setState({ openSnackBar: true })
    }
    
    public handleClose = () => {
        this.setState({ openSnackBar: false })
    }
    private async _login() {
        try {
            const { username, password } = this.state
            if (username === '') {
                this.setState({
                    openSnackBar: true,
                    mensajeSnackBar: 'Captura usuario para continuar'
                })
                return
            }
            const login  = new FormData()
            login.append('email', username)
            login.append('password', password)

            const user = await ApiService.login(login)
            console.log(user)
            if ( user.status !== 200 ) {
                this.setState({
                    openSnackBar: true,
                    mensajeSnackBar: 'Usuario o contraseña incorrectos.'
                })
                return
            }
            // setUser(user)
            await localStorage.setItem('session', user.data)
            this.props.isLogged(true)
            
        } catch (error) {
            this.setState({
                openSnackBar: true,
                mensajeSnackBar: 'Error al iniciar sesión.'
            })
            // userLoggedOut()
        }
    }
    public handleChange = (name: any) => (event: any) => {
        this.setState({
          [name]: event.target.value
        })
    }
    private _renderForm() {
        const {classes} = this.props
        return (
            <Container className="container-background">
                <Form className="container-login">
                    <div>
                        <Row>
                            <Col sm="12" className="text-center">
                                <label className={classes.title}>Inicia sesión</label>   
                                {/* <img alt="" src="./assets/images/logo.png" 
                                    className="img-logo" /> */}
                            </Col>
                            <Col sm="12">
                                <TextField
                                    label="Correo"
                                    placeholder="Correo"
                                    className={classes.textField}
                                    value={this.state.username}
                                    type="default"
                                    onChange={this.handleChange('username')}
                                    onKeyPress={this.handleOnKeyPress}
                                    margin="normal"
                                    variant="filled"
                                    style={{width: '100%'}}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <Tooltip title="Usuario" placement="top">
                                                <Person className={classes.icon}/>
                                            </Tooltip>
                                            </InputAdornment>,
                                    }}
                                />
                                <TextField
                                    label="Contraseña"
                                    placeholder="Contraseña"
                                    className={classes.textField}
                                    value={this.state.password}
                                    type="password"
                                    onChange={this.handleChange('password')}
                                    onKeyPress={this.handleOnKeyPress}
                                    margin="normal"
                                    variant="filled"
                                    style={{width: '100%'}}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <Tooltip title="Contraseña" placement="top">
                                                <Lock className={classes.icon}/>
                                            </Tooltip>
                                            </InputAdornment>,
                                    }}
                                />
                            </Col>
                            <div style={{ width: '100%', padding: '0 85px' }}>
                                <Button color="primary" className={classes.buttonPrimary} variant="contained" onClick={this._login}>
                                    Aceptar
                                </Button>
                            </div>
                        </Row>
                    </div>
                </Form>
                <div className="footer">
                    <Col sm="12" className={classes.sidebarBottomLogo}>
                        <Typography>
                            Powered with <i className="uil uil-heart"></i> by MNK
                        </Typography>
                    </Col>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.state.openSnackBar}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.mensajeSnackBar}</span>}
                />
            </Container>
        )
    }

    public render() {
        this.handleOnKeyPress  = this.handleOnKeyPress.bind(this) 
        this._login = this._login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
        return this._renderForm()
    }
}

export default withStyles(styles)(Login)
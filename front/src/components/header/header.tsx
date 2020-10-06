import * as React from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import './style.css'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'

interface Props {
    classes: any
    isLogged: Function
    user?: any
    openPerfil: Function
}
interface State {
    nombre: string
    search: string
    openSnackBar: boolean
    mensajeSnackBar: string
    anchorEl: any
    mostrarNotificaciones: any
}
const styles = {
    navBar: {
        position: 'absolute' as 'absolute',
        width: '100%',
        padding: '10px 0 0 0',
        height: 60,
        zIndex: 2,
    }
}
class Header extends React.Component<Props, State> {
    state: State = {
        nombre: '',
        search: '',
        openSnackBar: false,
        mensajeSnackBar: '',
        anchorEl: null,
        mostrarNotificaciones: null
    }
    public logOut(): void {
        localStorage.removeItem('session')
        localStorage.removeItem('_user')
        this.props.isLogged(false)
        // dispatch(userLoggedOut)
    }
    public openPerfil() {
        this.setState({ anchorEl: null }, () => {this.props.openPerfil()})
    }
    public handleClose() {
        this.setState({ openSnackBar: false })
    }
    public handleClick(event: any) {
        this.setState({ anchorEl: event.currentTarget })
    }
    public handleCloseMenu() {
        this.setState({ anchorEl: null })
    }
    public handleFieldChange(event: any): void {
        this.setState({ search: event.target.value })
    }

    public render() {
        const { classes } = this.props
        this.logOut = this.logOut.bind(this)
        let usuario = localStorage.getItem('_user')!
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleCloseMenu = this.handleCloseMenu.bind(this)
        this.openPerfil = this.openPerfil.bind(this)

        const { anchorEl } = this.state

        return (
            <Navbar light expand="md" className={classes.navBar}>
                <Nav style={{width: 'auto', position: 'absolute', right: 20}}>
                    <NavItem>
                        <p
                        style={{
                            marginTop: 5,
                            background: '#2449b1',
                            padding: '5px 20px 5px 20px',
                            borderRadius: 3,
                            color: 'white'
                        }}
                        >{JSON.parse(usuario).name}</p>
                    </NavItem>
                    <NavItem style={{ padding: 7,  }}>
                        <Button
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{
                            padding: 0,
                            minWidth: 24
                        }}
                        >
                            <ExpandMore/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleCloseMenu}
                        >
                            <MenuItem onClick={this.openPerfil}>
                                <FontAwesomeIcon 
                                style={{fontSize: 17, marginRight: 10, color: '#172960'}} 
                                icon={ 'user-cog'} />
                                Perfil
                            </MenuItem>
                            <MenuItem onClick={this.logOut}>
                                <FontAwesomeIcon 
                                style={{fontSize: 17, marginRight: 10, color: '#172960'}} 
                                icon={ 'sign-out-alt'} />
                                Salir
                            </MenuItem>
                        </Menu>
                    </NavItem>
                </Nav>
                <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={this.state.openSnackBar}
                        onClose={this.handleClose}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">{this.state.mensajeSnackBar}</span>}
                    />
            </Navbar>
        )
    }
}
export default withStyles(styles)(Header)
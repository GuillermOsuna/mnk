import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import UsuarioComponent from '../components/administrar/usuarios/usuarios'

const styles = {
    paper: {
        margin: '0 auto',
        padding: 0, 
        textAlign: 'center' as 'center'
    }
}

interface Props {
    classes: any
}
class Users extends React.Component<Props> {
 
    private _renderContacts() {
        return (
            <UsuarioComponent />
        )
    }

    public render() {
        return this._renderContacts()
    }
}
export default withStyles(styles)(Users)
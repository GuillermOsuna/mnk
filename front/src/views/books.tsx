import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BooksComponent from '../components/books/index'

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

class Perfil extends React.Component<Props> {
 
    private _renderContacts() {
        return (
            <BooksComponent />
        )
    }

    public render() {
        return this._renderContacts()
    }
}
export default withStyles(styles)(Perfil)
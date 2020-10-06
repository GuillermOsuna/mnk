import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CategoriesComponent from '../components/categories/index'

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

class Categories extends React.Component<Props> {
    private _renderContacts() {
        return (
            <CategoriesComponent />
        )
    }
    public render() {
        return this._renderContacts()
    }
}
export default withStyles(styles)(Categories)
import * as React from 'react'
import SideBar from '../components/sidebar/sidebar'
import { Card, Container } from 'reactstrap'
import Usuarios from './usuarios'
import Libros from './books'
import Categorias from './categories'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    card: {
        height: '100vh',
        overflowY: 'scroll' as 'scroll',
        borderRadius: 0,
        padding: 0,
        backgroundColor: '#e6e7ee',
        borderTopLeftRadius: 17,
        borderBottomLeftRadius: 17,
    },
    snackCumple: {
        cursor: 'pointer'
    }
}

interface Props {
    classes: any
    isLogged: Function
}
interface State {
    View: any
}

class Main extends React.Component<Props, State> {
    state: State = {
        View: Usuarios
    }

    public changeView(view: string): void {
        if (view === 'usuarios') {
            this.setState({
                View: Usuarios
            })
        }
        if (view === 'libros') {
            this.setState({
                View: Libros
            })
        }
        if (view === 'categorias') {
            this.setState({
                View: Categorias
            })
        }
    }

    public render() {
        const { classes } = this.props
        this.changeView = this.changeView.bind(this)

        return (
            <Container style={{ maxWidth: '100%', padding: 0, height: '100vh'}}>
                <SideBar changeView={this.changeView} />
                <Card body={true} className={classes.card}>
                    <this.state.View/>
                </Card>
            </Container>
        )
    }
}
export default withStyles(styles)(Main)
import * as React from 'react'
import ApiService from '../../data/services/ApiService'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        width: '100%',
        marginTop: 20,
        overflowX: 'auto' as 'auto',
    },
        table: {
        minWidth: 700,
    },
    buttonPrimary: {
        color: 'white',
        '&:hover': {
            backgroundColor: '#2549b2d6'
        },
        width: 138,
        height: 36,
        backgroundColor: '#2549B2'
    },
    textField: {
        width: '100%',
        margin: 0,
        marginTop: 12,
        marginBottom: 25,
        '& label': {
            transform: 'translate(12px, 15px) scale(1)',
            '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
                transform: 'translate(0px, -14px) scale(.75)!important'
            }
        },
        '& .MuiInputBase-root': {
            borderRadius: 0
        },
        '& .MuiFilledInput-underline:before': {
            display: 'none'
        },
        '& .MuiFilledInput-underline:after': {
            display: 'none'
        },
        '& .MuiFilledInput-input': {
            padding: '12px 12px 12px'
        },
        '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart': {
            marginTop: 0
        }
    },
    actionsButtons: {
        borderRadius: '100%',
        height: 40,
        width: 40,
        minWidth: 'auto' as 'auto'
    },
    row: {
        '& td': {
            paddingTop: 5,
            paddingBottom: 5
        }
    },
    eliminar: {
        position: 'absolute' as 'absolute',
        right: '-100%',
        top: 0,
        background: '#ff4d4d',
        color: 'white',
        width: '100%',
        padding: 6,
        transition: 'right .3s',
        '& p': {
            fontSize: 13
        },
        '& i': {
            fontSize: 16,
            cursor: 'pointer',
            '&:nth-child(1)': {
                marginRight: 3
            },
            '&:nth-child(2)': {
                marginLeft: 3
            }
        }
    }
}
interface Props {
    classes: any
    item: any
    openEdit: Function
    getItems: Function
}
interface State {
    key: number
    openConfirmar: boolean
}
class RowCorreo extends React.Component<Props, State> {
    state: State = {
        key: 0,
        openConfirmar: false
    }
    public componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.state.openConfirmar) {
                this.toggle()
            }
        })
    }
    public toggle() {
        this.setState({
            openConfirmar: !this.state.openConfirmar
        })
    }
    public Delete() {
        const form  = new FormData()
        form.append('id', this.props.item.id)
        ApiService.deleteBooks(form).then((item: any) => {
            if ( item.status === 200 ) {
                this.props.getItems()
                this.toggle()
                return
            }
        })
    }
    public reloadKey() {
        this.setState({ key: Math.random() })
    }
    public openEdit() {
        this.props.openEdit(this.props.item)
    }
    public handleClick() {
        console.log('click')
    }
    public render() {
        this.Delete = this.Delete.bind(this)
        this.toggle = this.toggle.bind(this)
        this.reloadKey = this.reloadKey.bind(this)
        this.openEdit = this.openEdit.bind(this)
        const { classes, item } = this.props
        const {openConfirmar} = this.state
        
        return (
                <TableRow key={this.state.key} className={classes.row}>
                    <TableCell align="center">{ item.name }</TableCell>
                    <TableCell align="center">{ item.author }</TableCell>
                    <TableCell align="center">{ item.categoryName }</TableCell>
                    <TableCell align="center">{ item.borrowedName }</TableCell>
                    <TableCell align="center">{ item.active ? 'Disponible' : 'No disponible' }</TableCell>

                    <TableCell align="center" style={{position: 'relative', overflow: 'hidden'}}>
                        <Tooltip title="Editar" placement="top">
                            <Button onClick={this.openEdit} className={classes.actionsButtons}><i className="uil uil-pen"></i></Button>
                        </Tooltip>
                        
                        <Tooltip title="Eliminar" placement="top">
                            <Button onClick={this.toggle} className={classes.actionsButtons}><i className="uil uil-trash-alt"></i></Button>
                        </Tooltip>
                        <div className={classes.eliminar} style={{right: openConfirmar ? 0 : '-100%'}}>
                            <Typography>
                                ¿Estás seguro?
                            </Typography>
                            <Tooltip title="Si" placement="top">
                                <i onClick={this.Delete} className="uil uil-thumbs-up"></i>
                            </Tooltip>
                            <Tooltip title="No" placement="top">
                                <i onClick={this.toggle} className="uil uil-thumbs-down"></i>
                            </Tooltip>
                        </div>
                    </TableCell>
                </TableRow>
        )
    }
}
export default withStyles(styles)(RowCorreo)
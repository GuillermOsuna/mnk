import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ApiService from '../../../data/services/ApiService'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Button from '@material-ui/core/Button'
import RowItem from './tableRow'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { styleJson } from './styleUsuarios'

interface Props {
    onRef?: Function
    onChange?: Function
    classes: any
}
interface State {
    rowsPerPage: number
    page: number
    items: any
    id: string
    name: string
    email: string
    password: string
    openSave: boolean
    isVisible: boolean
    isEdit: boolean
    filtro: string
    numeroregistros: number
}

const styles = styleJson()

class TablaPerfil extends React.Component<Props, State> {
    state: State = {
        rowsPerPage: 10,
        page: 0,
        numeroregistros: 0,
        items: [],
        id: '',
        name: '',
        email: '',
        password: '',
        filtro: '',
        openSave: false,
        isVisible: false,
        isEdit: false
    }
    public componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.state.openSave) {
                this.closeAdd()
            }
        })
        this.Get()
    }
    public handleChangeRowsPerPage = (event: any) => {
        this.setState({ rowsPerPage: event.target.value, items: [] }, () => {
               this.Get()
       })
    }
    public handleChangePage = (event: any, page: any) => {
        this.setState({
            page: page
         }, () => {
                this.Get()
        } )
    }
    public stableSort = (array: any, cmp: any) => {
        const stabilizedThis = array.map((el: any, index: any) => [el, index])
        stabilizedThis.sort((a: any, b: any) => {
            const order = cmp(a[0], b[0])
            if (order !== 0) {
                return order
            }
            return a[1] - b[1]
        })
      
        return stabilizedThis.map((el: any) => el[0])
    }
    public getSorting = (order: any, orderBy: any) => {
        return order === 'desc' ? (a: any, b: any) => {this.desc(a, b, orderBy)} : (a: any, b: any) => -this.desc(a, b, orderBy)
    }
    public desc(a: any, b: any, orderBy: any) {
        if (b[orderBy] < a[orderBy]) {
          return -1
        }
      
        if (b[orderBy] > a[orderBy]) {
          return 1
        }
      
        return 0
    }
    private Get() {
        const {filtro} = this.state
        const form  = new FormData()

        if (filtro.length > 2) {
            form.append('filtro', filtro)
        } else {
            form.append('filtro', '')
        }
        
        ApiService.getUsers(form).then((item: any) => {
            if ( item.status === 200 ) {
                this.setState({
                    items: item.data,
                    numeroregistros: item.data.length
                })
                return
            }
        })
    }

    public handleChange = (name: any) => (event: any) => {
        this.setState<never>({
          [name]: event.target.value
        }, () => {
            if (name === 'filtro') {
                this.Get()
            }
        })
    }
    public Save() {
        
        const {id, name, email, password, isEdit} = this.state

        const form  = new FormData()
        form.append('id', id)
        form.append('name', name)
        form.append('email', email)
        form.append('password', password)
        if (isEdit) {
            ApiService.updateUser(form).then((item: any) => {
                if ( item.status === 200 ) {
                    this.Get()
                    this.closeAdd()
                    return
                }
            })
            return
        }
        ApiService.saveUser(form).then((item: any) => {
            if ( item.status === 200 ) {
                this.Get()
                this.closeAdd()
                return
            }
        })
    }
    public openAdd() {
        this.setState({
            openSave: !this.state.openSave
        })
    }
    public closeAdd() {
        this.setState({
            name: '',
            email: '',
            password: '',
            isEdit: false
        })
        this.openAdd()
    }
    public changeisVisible() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    public openEdit(item: any) {
        this.setState({
            id: item.id,
            name: item.name,
            email: item.email,
            password: 'default',
            isEdit: true
        })
        this.openAdd()
    }
 
    public render() {
        const {classes} = this.props
        const {page, rowsPerPage, openSave, isEdit} = this.state
        this.changeisVisible = this.changeisVisible.bind(this)
        this.openAdd = this.openAdd.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeAdd = this.closeAdd.bind(this)
        this.Get = this.Get.bind(this)
        this.Save = this.Save.bind(this)
        
        return (
            <div style={{height: '100%'}}>
                <div className={classes.header} style={{height: openSave ? '100%' : 140}}>
                    <Typography className={classes.headerBreadCrumb}>
                        <span>Administrar <i className="uil uil-angle-right"></i></span>
                        <span> Usuarios {openSave ? <i className="uil uil-angle-right"></i> : ''}</span>
                        {openSave ? <span> Agregar</span> : ''}
                    </Typography>
                    <Typography className={classes.headerTitle}>
                        Usuarios
                    </Typography>
                    {
                        openSave ? 
                            <i onClick={this.closeAdd} className="uil uil-times" 
                            style={{ position: 'absolute', right: 60, top: 40, fontSize: 25, cursor: 'pointer' }}></i>
                         :
                        <Button onClick={this.openAdd} className={classes.buttonPrimary} color="primary" variant="contained">
                            <i className="uil uil-plus"></i>
                            Agregar
                        </Button>
                    }
                    <div className={classes.containerAdd} style={{opacity: openSave ? 1 : 0, display: openSave ? 'block' : 'none'}}>
                        <Typography className={classes.formTitle}>
                            {
                                isEdit ? 'Editar' : 'Agregar'
                            }
                        </Typography>
                        <TextField
                            label="Nombre"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            variant="filled"
                            style={{width: '100%'}}
                        />
                        <TextField
                            label="Correo"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                            variant="filled"
                            style={{width: '100%'}}
                        />
                        <TextField
                            label="Contraseña"
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            margin="normal"
                            variant="filled"
                            type={this.state.isVisible ? 'default' : 'password'}
                            style={{width: '100%'}}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position="start" style={{cursor: 'pointer'}} onClick={this.changeisVisible}>
                                            <i className={this.state.isVisible ? 'uil uil-eye' : 'uil uil-eye-slash'}></i>
                                    </InputAdornment>
                            }}
                        />
                        <Button 
                            onClick={this.Save}
                            className={classes.buttonPrimary}
                            color="primary"
                            variant="contained"
                            style={{
                                position: 'relative' as 'relative',
                                left: '50%',
                                marginLeft: -72}}>
                            Aceptar
                        </Button>
                    </div>
                </div>
                <div className={classes.body}>

                    <TextField 
                        id="outlined-size-small" 
                        className={classes.textFieldSearch}
                        label="Búsqueda" 
                        type="search"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange('filtro')}
                        value= {this.state.filtro}
                        style={{width: 250}}
                    />
                
                    <div>
                        <Table className={classes.table}>
                            <TableHead>
                            <TableRow 
                                hover
                                tabIndex={-1}
                            >
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Correo</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.stableSort(this.state.items, this.getSorting('asc', 'createdAt'))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item: any, key: any) => {
                                        return(
                                            <RowItem
                                                key={key} 
                                                item={item} 
                                                openEdit={this.openEdit}
                                                getItems={this.Get}
                                                />
                                        )
                                    })
                                }
                                
                            </TableBody>
                        </Table>
                        <TablePagination
                            component="div"
                            count={this.state.numeroregistros}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            backIconButtonProps={{
                            'aria-label': 'Página anterior',
                            }}
                            labelRowsPerPage= "Número de registros por página"
                            nextIconButtonProps={{
                            'aria-label': 'Página siguiente',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(TablaPerfil)
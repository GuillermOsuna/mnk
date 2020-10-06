import * as React from 'react'
import { Col } from 'reactstrap'
import { withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { styleJson } from './style'

const styles = styleJson()

interface Props { 
    changeView: Function
    classes: any,
}

interface State {
    usuariosSelected: any
}

class SideBar extends React.Component<Props, State> {
    state: State = {
        usuariosSelected: this.props.classes.buttonSelected
    }

    public toggle(item: any, select: any): void {
        const { classes } = this.props
        this.setState({ 
            usuariosSelected: classes.button,
            [item]: !this.state[item],
            [select]: classes.buttonSelected })
            
        this.props.changeView(item)
    }

    public render() {
        const { classes } = this.props
        this.toggle = this.toggle.bind(this)
        return (
            <div className={classes.sidebar}>
                <div className="sidebarInner">
                    <Col sm="12" className="sidebarLogo">
                        <p>
                            Library
                        </p>
                    </Col>
                    <Col sm="12" className="colList">
                        <Accordion className={classes.Accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        <i className={'uil '}></i>
                                        Libros
                                    </Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography 
                                        onClick={() => this.toggle('libros', 'librosSelected')}>
                                        <i className="uil uil-arrow-right"></i>
                                        Lista
                                    </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.Accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        <i className={'uil '}></i>
                                        Categorias
                                    </Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                                    <Typography 
                                        onClick={() => this.toggle('categorias', 'categoriasSelected')}>
                                        <i className="uil uil-arrow-right"></i>
                                        Lista
                                    </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.Accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        <i className={'uil '}></i>
                                        Administrador
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography 
                                        onClick={() => this.toggle('usuarios', 'usuariosSelected')}>
                                        <i className="uil uil-arrow-right"></i>
                                        Usuarios
                                    </Typography>
                                </AccordionDetails>
                        </Accordion>
                    </Col>
                    <Col sm="12" className="sidebarBottomLogo">
                        <Typography>
                            Powered with <i className="uil uil-heart"></i> by <br /> MNK
                        </Typography>
                    </Col>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SideBar)
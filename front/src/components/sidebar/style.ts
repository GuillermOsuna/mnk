export const styleJson = () => (
    {
        sidebar: {
            width: 230,
            float: 'left' as 'left',
            background: '#121b24',
            color: 'white',
            minHeight: '100vh',
            marginTop: -1,
            '& .sidebarInner': {
                width: '100%',
                height: '100vh',
                maxHeight: '60%',
                textAlign: 'left' as 'left',
                color: 'black',
                zIndex: 4,
                float: 'left' as 'left',
                position: 'relative' as 'relative',
                overflow: 'hidden' as 'hidden',
                '& .sidebarBottomLogo': {
                    left: '23px',
                    color: 'white',
                    width: '185px',
                    bottom: '0',
                    padding: '25px 13px',
                    position: 'fixed' as 'fixed',
                    fontSize: '80%',
                    background: '#1e232d',
                    textAlign: 'center' as 'center',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    '& p': {
                        fontSize: 12
                    },
                    '& .uil-heart': {
                        color: '#ff4d4d',
                        fontSize: 17
                    }, 
                    '& a': {
                        color: 'white'
                    }
                },
                '& .colList': {
                    overflowY: 'scroll' as 'scroll',
                    width: 250,
                    maxHeight: '70vh',
                    maxWidth: 'initial',
                    backgroundColor: 'transparent', 
                    padding: 0
                },
                '& .uil.uil-web-unicron-code': {
                    backgroundImage: 'url(http://localhost:3000/assets/images/Unicorn.svg)',
                    padding: '0px 9px',
                    backgroundSize: 'cover'
                }
            },
            '& .sidebarLogo': {
                padding: '24px 20px',
                '& p': {
                    color: 'white',
                    fontSize: 20,
                },
                '& img': {
                    maxWidth: '95%',
                    margin: '0 auto'
                }
            },
        },
        Accordion: {
            color: 'white',
            boxShadow: 'none',
            background: 'transparent',
            margin: '0!important',
            '& .MuiButtonBase-root': {
                height: 48,
            },
            '& .MuiIconButton-root': {
            },
            '& .MuiAccordionSummary-root': {
                '&:hover' : {
                    borderLeft: '3px solid #3b629d',
                    background: 
                    `
                        linear-gradient(90deg, 
                        rgba(59,98,157,0.5144432773109244) 0%, 
                        rgba(59,98,157,0.27354691876750703) 35%, 
                        rgba(0,212,255,0) 100%)
                    `
                }
            },
            '& .MuiAccordionSummary-root.Mui-expanded': {
                minHeight: 48,
                margin: 0,
                borderLeft: '3px solid #3b629d',
                background: 
                `
                    linear-gradient(90deg, 
                    rgba(59,98,157,0.5144432773109244) 0%, 
                    rgba(59,98,157,0.27354691876750703) 35%, 
                    rgba(0,212,255,0) 100%)
                `
            },
            '& .Mui-focusVisible': {
                background: 'transparent'
            },
            '& .MuiAccordionDetails-root': {
                padding: '10px 24px 10px'
            },
            '& i': {
                fontSize: 14,
                marginRight: 5
            },
            '& p': {
                color: '#c1c1c1',
                fontSize: 12,
            },
            '& .MuiSvgIcon-root': {
                color: '#c1c1c1',
                fontSize: '1rem'
            },
            titlePage: {
                fontWeight: 900,
                textAlign: 'center' as 'center',
                color: 'white',
                fontSize: 35
            },
            button: {
                color: 'white',
                '&:hover': {
                    backgroundColor: 'transparent'
                },
                width: 212,
                height: 45,
                backgroundColor: 'transparent'
            },
            buttonSelected: {
                color: 'white',
                '&:hover': {
                    backgroundColor: '#4d71d8'
                },
                width: 212,
                height: 45,
                boxShadow: 
                    `
                        0 12px 20px -10px rgba(80, 108, 123, .28), 
                        0 4px 20px 0 rgba(0,0,0,.12), 
                        0 7px 8px -5px hsla(201, 21%, 40%, 0.28)
                    `,
                backgroundColor: '#4d71d8'
            },
            logoBottom: {
                position: 'absolute' as 'absolute',
                bottom: 0,
                maxWidth: 230,
                padding: '25px 13px',
                textAlign: 'left' as 'left',
                backgroundColor: '#172960'
            },
            buttonIcon: {
                width: 90,
                height: 60,
                boxShadow: 'none'
            },
            '& #panel1a-content': {
                '& .MuiAccordionDetails-root': {
                    cursor: 'pointer',
                    '&:hover': {
                        '& p': {
                                color: '#3b629d'
                        }
                    }
                }
            }
        }
    }
)
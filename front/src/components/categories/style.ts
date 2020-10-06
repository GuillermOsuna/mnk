export const styleJson = () => (
    {
        header: {
            width: '100%',
            background: '#f8f8fa',
            height: 140,
            padding: '15px 35px',
            transition: 'height .5s'
        },
        body: {
            padding: '15px 35px',
            '& > div': {
                background: 'white',
                borderRadius: 5
            }
        },
        headerBreadCrumb: {
            fontSize: 12,
            '& span': {
                color: '#a7abb5'
            },
            '& span:last-child': {
                color: '#6286c2'
            }
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: 600,
            marginTop: 10
        },
        formTitle: {
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 15
        },
        buttonPrimary: {
            color: 'white',
            fontSize: 12,
            position: 'absolute' as 'absolute',
            right: 35,
            top: 40,
            boxShadow: 'none' as 'none',
            textTransform: 'inherit' as 'inherit',
            width: 144,
            height: 36,
            backgroundColor: '#3a7ddd',
            '&:hover': {
                backgroundColor: '#3069bb'
            },
        },
        sectionHelper: {
            backgroundColor: 'white',
            width: 260,
            height: 350,
            right: 0,
            position: 'fixed' as 'fixed',
            top: 142
        },
        textField: {
            width: '100%',
            margin: 0,
            marginBottom: 25,
            height: 35,
            '& label': {
                transform: 'translate(12px, 13px) scale(1)',
                fontSize: 13,
                '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
                    color: '#3a7ddd',
                    transform: 'translate(0px, -14px) scale(.75)!important'
                }
            },
            '& .MuiInputBase-root': {
                backgroundColor: '#eae8ef',
                borderRadius: 3,
            },
            '& .MuiFilledInput-underline:before': {
                display: 'none'
            },
            '& .MuiFilledInput-underline:after': {
                display: 'none'
            },
            '& .MuiFilledInput-input': {
                padding: '8px 12px 7px'
            },
            '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart': {
                marginTop: 0
            }
        },
        textFieldSearch: {
            width: '100%',
            margin: 0,
            marginBottom: 25,
            height: 35,
            '& label': {
                transform: 'translate(12px, 13px) scale(1)',
                fontSize: 13,
                '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
                    color: '#3a7ddd',
                    transform: 'translate(0px, -14px) scale(.75)!important'
                }
            },
            '& .MuiInputBase-root': {
                backgroundColor: 'white',
                borderRadius: 3,
            },
            '& .MuiFilledInput-underline:before': {
                display: 'none'
            },
            '& .MuiFilledInput-underline:after': {
                display: 'none'
            },
            '& .MuiFilledInput-input': {
                padding: '8px 12px 7px'
            },
            '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart': {
                marginTop: 0
            }
        },
        containerAdd: {
            float: 'left' as 'left',
            maxWidth: 320,
            marginLeft: -160,
            left: '50%',
            position: 'absolute' as 'absolute',
            top: 160,
            opacity: 0,
            transition: 'opacity .3s'
        }
    }
)
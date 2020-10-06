export const styleJson = () => (
    {
        underline: {
            '&:before': { // underline color when textfield is inactive
                backgroundColor: 'red',
              },
              '&:hover:not($disabled):before': { // underline color when hovered 
                backgroundColor: 'green',
              },
        },
        buttonPrimary: {
            color: 'white',
            width: '100%',
            height: 36,
            backgroundColor: '#3a7ddd',
            textTransform: 'initial' as 'initial',
            boxShadow: 'none' as 'none',
            '&:hover': {
                backgroundColor: '#3069bb'
            },
        },
        subtitle: {
            marginTop: 25,
            color: '#172960'
        },
        copyright: {
            color: 'white',
            lineHeight: 1.4
        },
        company: {
            color: 'white',
            marginTop: 25
        },
        title: {
            fontSize: 35,
            marginBottom: 40,
            color: '#c1c1c1',
            fontWeight: 900
        },
        textField: {
            width: '100%',
            background: 'white',
            margin: 0,
            marginBottom: 25,
            '& label': {
                display: 'none',
                transform: 'translate(12px, 15px) scale(1)',
                color: '#c1c1c1',
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
        icon: {
            color: '#c1c1c1'
        },
        sidebarBottomLogo: {
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
    }
)
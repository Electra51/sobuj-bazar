import { createTheme, Typography } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#6B8E23',
            mainBg: '#191919',
            hover: '#ff9caf',
            grayText:'#727272',
        }
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth:'xl'
            }
        },
      
    },
    Typography: {
        fontFamily:'"Inter", sans-serif'
    }
    
})
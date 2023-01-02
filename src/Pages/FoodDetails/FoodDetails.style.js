import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CounterBox = styled(Box)(({ theme }) => ({
    borderRadius: '20px',
    border: `1px solid #e1e1e1`,
    width: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    marginLeft: '1.5rem',
    '& > svg': {
        cursor: 'pointer',
    },
    '& > svg:hover': {
        color: theme.palette.primary.main,
    },
}));
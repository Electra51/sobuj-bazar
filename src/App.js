
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/Theme';
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
    </ThemeProvider>
  );
}

export default App;

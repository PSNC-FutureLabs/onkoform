import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HorizontalStepper from "./components/HorizontalStepper";
import { Container } from "@mui/material";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="sm">
        <HorizontalStepper />
      </Container>
    </LocalizationProvider>
  );
}

export default App;

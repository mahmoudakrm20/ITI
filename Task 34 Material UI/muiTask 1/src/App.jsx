import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, Button } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import Register from "./Register";
import Login from "./Login";
function App() {
  return (
    <>
      {/* <Typography variant="h1" component="h6" color="red" align="center">
        Create a new Note
      </Typography>
      <Button variant="contained">Contained</Button> */}
      <AppleIcon></AppleIcon>
      <Register />
      {/* <Login /> */}
    </>
  );
}

export default App;

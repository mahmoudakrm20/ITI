import { Box, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        maxWidth: "600px",
        margin: "auto",
        padding: "30px",
        border: "1px solid blue",
        borderRadius: "15px",
        backgroundColor: "white",
      }}
    >
      <TextField label="Email" name="email" type="email" fullWidth required />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;

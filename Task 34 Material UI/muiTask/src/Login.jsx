import { Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(/^[0-9a-zA-Z]*$/, "Password can only contain numbers and letters")
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const user = JSON.parse(localStorage.getItem("user"));
      if (
        user &&
        user.email === values.email &&
        user.password === values.password
      ) {
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
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
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
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

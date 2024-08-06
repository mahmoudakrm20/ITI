import { useState } from "react";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const countries = [
  { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
  { name: "Egypt", cities: ["Cairo", "Alexandria", "Ismailia"] },
];

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(/^[0-9a-zA-Z]*$/, "Password can only contain numbers and letters")
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  gender: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

const Register = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      country: "",
      city: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("user", JSON.stringify(values));
      navigate("/login");
    },
  });

  const handleCountryChange = (event) => {
    const country = event.target.value;
    formik.setFieldValue("country", country);
    const selected = countries.find((c) => c.name === country);
    setCities(selected ? selected.cities : []);
    formik.setFieldValue("city", "");
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1 },
        "& .MuiFormControl-root": { m: 1 },
        maxWidth: "600px",
        margin: "auto",
        padding: "30px",
        border: "1px solid blue",
        borderRadius: "15px",
        backgroundColor: "white",
      }}
    >
      <TextField
        label="Firstname"
        name="firstname"
        fullWidth
        value={formik.values.firstname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
      />
      <TextField
        label="Lastname"
        name="lastname"
        fullWidth
        value={formik.values.lastname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
      />
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
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
        </RadioGroup>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "red" }}>{formik.errors.gender}</div>
        )}
      </FormControl>
      <FormControl fullWidth>
        <Select
          displayEmpty
          value={formik.values.country}
          onChange={handleCountryChange}
          onBlur={formik.handleBlur}
          error={formik.touched.country && Boolean(formik.errors.country)}
        >
          <MenuItem value="" disabled>
            Select Country
          </MenuItem>
          {countries.map((country) => (
            <MenuItem key={country.name} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.country && formik.errors.country && (
          <div style={{ color: "red" }}>{formik.errors.country}</div>
        )}
      </FormControl>
      <FormControl fullWidth>
        <Select
          disabled={cities.length === 0}
          value={formik.values.city}
          onChange={formik.handleChange}
          name="city"
          onBlur={formik.handleBlur}
          error={formik.touched.city && Boolean(formik.errors.city)}
        >
          <MenuItem value="" disabled>
            Select City
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.city && formik.errors.city && (
          <div style={{ color: "red" }}>{formik.errors.city}</div>
        )}
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Register
      </Button>
    </Box>
  );
};

export default Register;

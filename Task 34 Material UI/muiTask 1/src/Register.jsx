// src/Register.jsx
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

const countries = [
  { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
  { name: "Egypt", cities: ["Cairo", "Alexandria", "Ismailia"] },
];

const Register = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    const selected = countries.find((c) => c.name === country);
    setCities(selected ? selected.cities : []);
  };

  return (
    <Box
      component="form"
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
      <TextField label="Firstname" name="firstname" fullWidth required />
      <TextField label="Lastname" name="lastname" fullWidth required />
      <TextField label="Email" name="email" type="email" fullWidth required />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        required
      />
      <FormControl required>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name="gender">
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
      </FormControl>
      <FormControl fullWidth required>
        <Select
          displayEmpty
          value={selectedCountry}
          onChange={handleCountryChange}
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
      </FormControl>
      <FormControl fullWidth required>
        <Select disabled={cities.length === 0}>
          <MenuItem value="" disabled>
            Select City
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
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

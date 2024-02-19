import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Linkinkg from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Linkinkg href="https://portaty.com/">Portaty</Linkinkg>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={`/portaty.png`}
            alt="Descripción de la imagen"
            width={100}
            height={100}
          />
          <Typography component="h1" variant="h5">
            Dashboard
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffb703",
                  },
                },
                "& label.Mui-focused": {
                  color: "#1f1f1f",
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#ffb703",
                  },
                },
                "& label.Mui-focused": {
                  color: "#1f1f1f",
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontSize: 12,
                padding: 2,
                backgroundColor: "#ffb703",
                "&:hover": {
                  backgroundColor: "#1f1f1f",
                },
              }}
            >
              <Link
                href="/home"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Iniciar sesion
              </Link>
            </Button>
            <Grid container>
              <Grid item xs></Grid>

              <Grid item>
                <Link
                  href="/forgot"
                  variant="body2"
                  style={{
                    color: "#1f1f1f",
                    fontWeight: 600,
                  }}
                >
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

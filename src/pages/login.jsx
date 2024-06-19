import React, { useState } from "react";
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

// amplify
import { Auth } from "aws-amplify";

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
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [userChangePwd, setUserChangePwd] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const challengeResponse = "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED";
    try {
      if (!isNewPassword) {
        const user = await Auth.signIn(email, password);
        console.log(user);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          setUserChangePwd(user);
          setIsNewPassword(true);
          setPassword("");
          alert("POR FAVOR ACTUALIZAR CONTRASEÑA");
        }
      } else {
        const result = await Auth.completeNewPassword(
          userChangePwd,
          newPassword
        );
        setIsNewPassword(false);
        setNewPassword("");
        setPassword("");
        alert("CONTRASEÑA ACTUALIZADA, INICIA SESION");
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  async function handleSignOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  // handleSignOut();
  async function handleGetUSer() {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
    } catch (err) {
      console.log(err);
    }
  }

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              disabled={isNewPassword}
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

            {isNewPassword ? (
              <TextField
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="new-password"
                label="Ingresar nueva contraseña"
                type="password"
                id="new-password"
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
            ) : (
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            )}
            {!isNewPassword && (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
            )}

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
              {isNewPassword ? "Actualizar Contraseña" : "Iniciar sesion"}
            </Button>
            {!isNewPassword && (
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
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../../styles/Notifications.module.css";
import { Button } from "@mui/material";

const Notifications = () => {
  const sendNotification = async () => {
    try {
      const response = await fetch("/api/sendNotifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Bienvenidos a Portaty",
          message: "Portaty es tu Guia Local",
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al enviar la notificación:", error);
    }
  };

  useEffect(() => {
    sendNotification();
  }, []);

  return (
    <div className={styles.notifications}>
      <Navbar />
      <div className={styles.content}>
        <h1>Envia una notificacion a todos nuestros usuarios registrados</h1>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
            marginTop: 5,
          }}
          noValidate
          autoComplete="off"
        >
          <div className={styles.boxes}>
            <TextField id="outlined-multiline-flexible" label="Titulo" />
            <TextField
              id="outlined-multiline-static"
              label="Contenido"
              multiline
              rows={5}
            />
            <Button
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
              Enviar notificacion
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Notifications;

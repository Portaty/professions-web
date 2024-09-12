import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "../../styles/Notifications.module.css";
import { Button } from "@mui/material";
import TableNotification from "@/components/TableNotification";

const Notifications = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendNotification = async () => {
    if (!title || !message) {
      setTitleError(!title);
      setMessageError(!message);
      return;
    } else {
      setTitleError(false);
      setMessageError(false);
    }

    try {
      const response = await fetch("/api/sendNotifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          message: message,
        }),
      });

      const data = await response.json();
      setTitle("");
      setMessage("");
    } catch (error) {
      console.error("Error al enviar la notificación:", error);
    }
  };

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
            <TextField
              id="outlined-multiline-flexible"
              label="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={titleError}
              helperText={titleError ? "El título es obligatorio" : ""}
            />
            <TextField
              id="outlined-multiline-static"
              label="Contenido"
              multiline
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "El contenido es obligatorio" : ""}
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
              onClick={sendNotification}
            >
              Enviar notificación
            </Button>
          </div>
        </Box>
        <h2
          style={{
            marginTop: 40,
          }}
        >
          Historial de notificaciones
        </h2>

        <TableNotification />
      </div>
    </div>
  );
};

export default Notifications;

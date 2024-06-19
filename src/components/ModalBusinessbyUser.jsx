import { Button, Modal, TextField } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../styles/Modal.module.css";
import { Auth, API } from "aws-amplify";
import * as queries from "@/graphql/custom/queries";

const ModalBusinessbyUser = ({ open, close, data }) => {
  const fetchData = async () => {
    const response = await API.graphql({
      query: queries.listBusinessbyUserID,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      variables: {
        userID: data,
      },
    });
    console.log(response);
  };
  useEffect(() => {
    console.log(data);
    fetchData();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h2>{`Vista previa del negocio`}</h2>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.name}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.email}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.name}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.email}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.name}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.email}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.input}>
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.name}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    // defaultValue={data.email}
                    variant="outlined"
                    disabled={true}
                    inputProps={{
                      style: { fontSize: 14 },
                    }}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={close}
                sx={{
                    width: 100,
                }}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalBusinessbyUser;

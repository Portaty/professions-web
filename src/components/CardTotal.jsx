import React from "react";
import styles from "../styles/Card.module.css";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
const CardTotal = ({ texts, data, users = true }) => {
  if (data)
    return (
      <div className={styles.card}>
        <p className={styles.title}>
          {texts.title}
          {texts?.country === "VEN"
            ? " en Venezuela"
            : texts?.country === "COL"
            ? " en Colombia"
            : ""}
        </p>
        <div className={styles.content}>
          <div>
            <p className={styles.contentTitle}>{data}</p>
            <span>registros</span>
          </div>
          {users ? (
            <PeopleAltRoundedIcon
              sx={{
                fontSize: 88,
              }}
            />
          ) : (
            <StoreRoundedIcon
              sx={{
                fontSize: 88,
              }}
            />
          )}
        </div>
      </div>
    );
};

export default CardTotal;

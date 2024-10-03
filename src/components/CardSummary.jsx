import React from "react";
import styles from "../styles/Card.module.css";

const CardSummary = ({ texts, data }) => {
  if (data)
    return (
      <div className={styles.card}>
        <p className={styles.title}>
          {texts?.title}
          {texts?.country === "VEN"
            ? " en Venezuela"
            : texts?.country === "COL"
            ? " en Colombia"
            : ""}
        </p>
        <div className={styles.content}>
          <div className={styles.contentSummary}>
            {data.map((item, index) => (
              <div key={index} className={styles.cardSummary}>
                <p className={styles.titleSummary}>{item.title}</p>
                <p className={styles.totalSummary}>
                  {item.total === 0 ? "0" : `+${item.total}`}
                </p>
                <p className={styles.textSummary}>registros</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default CardSummary;

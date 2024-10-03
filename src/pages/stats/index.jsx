import Navbar from "@/components/Navbar";
import React from "react";
import styles from "../../styles/Stats.module.css";
import SelectCard from "@/components/SelectCard";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.statsInitial}>
          <p>Selecciona para mostrar las estadisticas de ese grupo</p>
          <SelectCard />
        </div>
      </div>
    </div>
  );
};

export default Stats;

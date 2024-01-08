import styles from "@/styles/Home.module.css";
import { useState } from "react";

const Stats = ({ stats }) => {
  const [showStats, setShowStats] = useState(false);

  return (
    <div className={styles.headerMenuContainer}>
      <span onClick={() => setShowStats(!showStats)}>STATS</span>
      <div
        className={styles.statsMenu}
        style={{
          display: showStats ? "block" : "none",
          lineHeight: "2.5",
        }}
      >
        <div style={{
          padding: "15px"
        }}>
          HP: {stats.hp}
          <br />
          Intelligence: {stats.intelligence} <br />
          Defense: {stats.defense}
        </div>
      </div>
    </div>
  );
};

export default Stats;

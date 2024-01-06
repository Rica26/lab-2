import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Spells from "./spell";
import Inventory from "./inventory";
import Enemy from "./enemy";
import Map from "@/components/map";
import Item from "./item";

const Environment = () => {
  const [environment, setEnvironment] = useState("forest");
  const [isMonster, setIsMonster] = useState(false);
  const [isEnemyDestroyed, setEnemyDestroyed] = useState({
    isMonsterDestroyed: false,
    isSkullDestroyed: false,
  });

  const setEnemyDestroyedHandler = () => {
    if (isEnemyDestroyed.isSkullDestroyed === false && environment === "hell") {
      setEnemyDestroyed({ ...isEnemyDestroyed, isSkullDestroyed: true });
    }
    if (isEnemyDestroyed.isMonsterDestroyed === false && environment === "ice") {
      setEnemyDestroyed({ ...isEnemyDestroyed, isMonsterDestroyed: true });
    }
  };

  return (
    <div
      className={`${
        environment === "forest"
          ? styles.mainContainer
          : environment === "hell"
          ? styles.hell
          : environment === "ice"
          ? styles.ice
          : environment === "desert"
          ? styles.desert
          : styles.mainContainer
      }`}
    >
      {environment !== "forest" && environment !== "desert" && (
        <Enemy isMonster={isMonster} isDestroyed={isEnemyDestroyed} />
      )}
      {environment === "desert" && <Item />}
      <div className={`${styles.header}`}>
        <Inventory />
        <div className={`${styles.headerMenuContainer}`}>
          <span>STATS</span>
        </div>
        <Spells onEnemyDestroy={setEnemyDestroyedHandler} environment={environment} setEnvironment={setEnvironment} />
      </div>
      <div className={`${styles.footer}`}>
        <QuestBoard />
        <Map setEnvironment={setEnvironment} setIsMonster={setIsMonster} setEnemyDestroyed={setEnemyDestroyed} />
      </div>
    </div>
  );
};

export default Environment;

const QuestBoard = () => {
  return (
    <div className={styles.questBoardContainer}>
      <span style={{ position: "absolute", left: 80, top: 550, fontSize: 15, textAlign: "center", color: "black" }}>
        QUEST BOARD
      </span>
      <span
        style={{
          position: "absolute",
          left: 30,
          top: 600,
          fontSize: 13,
          textAlign: "center",
          color: "black",
          lineHeight: "2.5",
          fontWeight: "bold",
        }}
      >
        1-Visita o Hell e derrota a caveira
        <br />
        2-Visita o Ice e derrota o monstro
      </span>
    </div>
  );
};

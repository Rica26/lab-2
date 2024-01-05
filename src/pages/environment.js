import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Spells from "./spell";
import Forest from "@/environments/forest";
import Hell from "@/environments/hell";
import Ice from "@/environments/ice";

const Environment = () => {
  const [environment, setEnvironment] = useState("forest");

  return (
    <div
      className={`${
        environment === "forest" ? styles.mainContainer : environment === "hell" ? styles.hell : environment === "ice" ? styles.ice : environment === "desert" ? styles.desert : styles.mainContainer
      }`}
    >
      {environment === "forest" && <Forest />}
      {environment === "hell" && <Hell />}
      {environment==="ice" && <Ice/>}
      <div className={`${styles.header}`}>
        <Inventory />
        <div className={`${styles.headerMenuContainer}`}>
          <span>STATS</span>
          <span>JORNAL</span>
        </div>
        <Spells />
      </div>
      <div className={`${styles.footer}`}>
        <QuestBoard />
        <Map setEnvironment={setEnvironment} />
      </div>
    </div>
  );
};

export default Environment;

const Inventory = () => {
  return (
    <div className={`${styles.inventory}`}>
      <div className={`${styles.inventoryItem}`}></div>
      <div className={`${styles.inventoryItem}`}></div>
      <div className={`${styles.inventoryItem}`}></div>
    </div>
  );
};

const QuestBoard = () => {
  return <div className={styles.questBoardContainer}></div>;
};

const Map = ({ setEnvironment }) => {
  return (
    <div className={`${styles.mapContainer}`}>
      <div className={`${styles.mapBlock}`} onClick={() => setEnvironment("forest")}>
        forest
      </div>
      <div className={`${styles.mapBlock}`} onClick={() => setEnvironment("hell")}>
        hell
      </div>
      <div className={`${styles.mapBlock}`} onClick={() => setEnvironment("ice")}>
        ice
      </div>
      <div className={`${styles.mapBlock}`} onClick={() => setEnvironment("desert")}>
      desert
      </div>
    </div>
  );
};

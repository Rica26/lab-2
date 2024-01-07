import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Spells from "../components/spell";
import Inventory from "../components/inventory";
import Enemy from "../components/enemy";
import Map from "@/components/map";
import Item from "../components/item";
import QuestBoard from "@/components/questboard";
import wand from "../../public/assets/magic-wand.png";
import hat from "../../public/assets/wizard-hat.png"
import Stats from "@/components/stats";

const Environment = () => {
  const [environment, setEnvironment] = useState("forest");
  const [isMonster, setIsMonster] = useState(false);
  const [isEnemyDestroyed, setEnemyDestroyed] = useState({
    isMonsterDestroyed: false,
    isSkullDestroyed: false,
  });
  const [inventorySlot, setInventorySlot] = useState([null,null,null]);
  const [stats, setStats] = useState({ intelligence: 10, defense: 10, hp: 10 });

  const setEnemyDestroyedHandler = () => {
    if (isEnemyDestroyed.isSkullDestroyed === false && environment === "hell") {
      setEnemyDestroyed({ ...isEnemyDestroyed, isSkullDestroyed: true });      
      setStats({ ...stats, intelligence: stats.intelligence + 1, defense: stats.defense + 1, hp: stats.hp +1 });
    }
    if (isEnemyDestroyed.isMonsterDestroyed === false && environment === "ice") {
      setEnemyDestroyed({ ...isEnemyDestroyed, isMonsterDestroyed: true });
      setStats({ ...stats, intelligence: stats.intelligence + 1, defense: stats.defense + 1, hp: stats.hp +1 });
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
      {environment === "desert" && !inventorySlot.find((el) => el === wand) && <Item src={wand} stats={stats} setStats={setStats} inventorySlot={inventorySlot} setInventorySlot={setInventorySlot} />}
      {environment === "forest" && !inventorySlot.find((el) => el === hat) && <Item src={hat} stats={stats} setStats={setStats} inventorySlot={inventorySlot} setInventorySlot={setInventorySlot} />}
      <div className={styles.header}>
        <Inventory inventorySlot={inventorySlot} setInventorySlot={setInventorySlot} stats={stats} setStats={setStats} />
        <Stats stats={stats} />
        <Spells onEnemyDestroy={setEnemyDestroyedHandler} environment={environment} setEnvironment={setEnvironment} />
      </div>
      <div className={styles.footer}>
        <QuestBoard isEnemyDestroyed={isEnemyDestroyed} />
        <Map setEnvironment={setEnvironment} setIsMonster={setIsMonster} />
      </div>
    </div>
  );
};

export default Environment;

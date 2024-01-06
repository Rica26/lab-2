import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Item from "./item";

const Inventory = () => {
  const [inventorySlot, setInventorySlot] = useState([null, null, null]);

  const handleInventory = (index) => {
    if (inventorySlot[index] === null) {
      const newInventory = [...inventorySlot];
      newInventory[index] = Item;
      setInventorySlot(newInventory);
    }
  };

  return (
    <div className={`${styles.inventory}`}>
      <div className={`${styles.inventoryItem}`}>1</div>
      <div className={`${styles.inventoryItem}`}>2</div>
      <div className={`${styles.inventoryItem}`}>3</div>
    </div>
  );
};

export default Inventory;

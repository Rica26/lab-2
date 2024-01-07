import styles from "@/styles/Home.module.css";
import Image from "next/image";
import wand from "../../public/assets/magic-wand.png";
import hat from "../../public/assets/wizard-hat.png";

const Inventory = ({ inventorySlot, setInventorySlot, stats, setStats }) => {
  const handleItemClick = (index, src) => {
    const updatedInventorySlot = [...inventorySlot];
    updatedInventorySlot.splice(index, 1);
    updatedInventorySlot.push(null);
    setInventorySlot(updatedInventorySlot);

    if (src === wand) setStats({ ...stats, intelligence: stats.intelligence - 2 });
    if (src === hat) setStats({ ...stats, intelligence: stats.intelligence - 4 });
  };

  return (
    <div className={styles.inventory}>
      {inventorySlot.map((el, index) => (
        <div key={index} className={styles.inventoryItem} onClick={() => handleItemClick(index, el)}>
          {el && <Image priority src={el} alt="item" width={50} height={50} />}
        </div>
      ))}
    </div>
  );
};

export default Inventory;

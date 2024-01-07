import Image from "next/image";
import wand from "../../public/assets/magic-wand.png";
import hat from "../../public/assets/wizard-hat.png";

const Item = ({ src, inventorySlot, setInventorySlot, stats, setStats }) => {
  const addItemHandler = () => {
    const nullIndex = inventorySlot.indexOf(null);

    if (nullIndex !== -1) {
      const newArray = [...inventorySlot];
      newArray[nullIndex] = src;
      setInventorySlot(newArray);
    }

    if (src === wand) setStats({ ...stats, intelligence: stats.intelligence + 2 });
    if (src === hat) setStats({ ...stats, intelligence: stats.intelligence + 4 });
  };

  return (
    <Image
      onClick={addItemHandler}
      priority
      src={src}
      width={50}
      height={50}
      alt="enemy"
      style={{
        cursor: "pointer",
        zIndex: 1,
        position: "absolute",
        left: 700,
        top: 300,
      }}
    />
  );
};

export default Item;

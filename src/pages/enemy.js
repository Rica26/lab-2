import skull from "../../public/skull.png";
import Image from "next/image";
import monster from "../../public/monster.png";

const Enemy = ({ isMonster, isDestroyed }) => {
  if (isMonster && isDestroyed.isMonsterDestroyed) return null;
  if (!isMonster && isDestroyed.isSkullDestroyed) return null;

  return (
    <Image
      priority
      src={isMonster ? monster : skull}
      width={100}
      height={100}
      alt="enemy"
      style={{
        zIndex: 1000,
        position: "absolute",
        left: 700,
        top: 300,
      }}
    />
  );
};

export default Enemy;

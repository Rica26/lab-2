import { useEffect, useState } from "react";
import { GiBoltSpellCast as BoltSpell } from "react-icons/gi";
import { GiFireSpellCast as FireSpell } from "react-icons/gi";
import { GiIceSpellCast as IceSpell } from "react-icons/gi";
import styles from "@/styles/Home.module.css";

const Spells = ({ onEnemyDestroy }) => {
  const [isFlickering, setFlickering] = useState(false);
  const [spell, setSpell] = useState("yellow");

  const spellHandler = () => {
    if (spell === "yellow") {
      setFlickering(true);
      setSpell("yellow");
      onEnemyDestroy();
      setTimeout(() => {
        setFlickering(false);
      }, 100);
    }
    if (spell === "red") {
      setFlickering(true);
      setSpell("red");
      onEnemyDestroy();
      setTimeout(() => {
        setFlickering(false);
      }, 100);
    }
    if (spell === "blue") {
      setFlickering(true);
      setSpell("#76CBFF");
      onEnemyDestroy();
      setTimeout(() => {
        setFlickering(false);
      }, 100);
    }
  };

  return (
    <div className={`${styles.spells}`}>
      <div>Spell:</div>
      <BoltSpell color="yellow" size={42} cursor="pointer" onClick={() => spellHandler("yellow")} />
      <FireSpell color="red" size={42} cursor="pointer" onClick={() => spellHandler("red")} />
      <IceSpell color="#76CBFF" size={42} cursor="pointer" onClick={() => spellHandler("blue")} />
      <div
        className={`${styles.spell}`}
        style={{
          background: isFlickering ? spell : "transparent",
          display: isFlickering ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Spells;

import styles from "@/styles/Home.module.css";

const Map = ({ setEnvironment, setIsMonster }) => {
  const setEnvironmentHandler = (environment) => {
      setEnvironment(environment);
    if (environment === "ice") {
      setIsMonster(true);
    } else {
      setIsMonster(false);
    }
  };

  return (
    <div className={`${styles.mapContainer}`}>
      <div className={`${styles.forestMap}`} onClick={() => setEnvironmentHandler("forest")}></div>
      <div className={`${styles.hellMap}`} onClick={() => setEnvironmentHandler("hell")}></div>
      <div className={`${styles.iceMap}`} onClick={() => setEnvironmentHandler("ice")}></div>
      <div className={`${styles.desertMap}`} onClick={() => setEnvironmentHandler("desert")}></div>
    </div>
  );
};

export default Map;

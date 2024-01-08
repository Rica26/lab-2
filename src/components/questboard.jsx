import styles from "@/styles/Home.module.css";

const QuestBoard = ({ isEnemyDestroyed }) => {
  return (
    <div className={styles.questBoardContainer}>
      <span style={{ position: "absolute", left: 80, top: 550, fontSize: 15, textAlign: "center", color: "black" }}>
        QUEST BOARD
      </span>
      <div
        style={{
          position: "absolute",
          left: 30,
          top: 600,
          fontSize: 13,
          textAlign: "center",
          color: "black",
          lineHeight: "2.5",
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ textDecoration: isEnemyDestroyed.isSkullDestroyed === true ? "line-through" : "none" }}>
          Visita o Hell e derrota a caveira
        </span>
        <span style={{ textDecoration: isEnemyDestroyed.isMonsterDestroyed === true ? "line-through" : "none" }}>
          Visita o Ice e derrota o monstro
        </span>
        {/* {!isEnemyDestroyed.isSkullDestroyed && <span>Visita o Hell e derrota a caveira</span>}
        {!isEnemyDestroyed.isMonsterDestroyed && <span>Visita o Ice e derrota o monstro</span>} */}
      </div>
    </div>
  );
};

export default QuestBoard;

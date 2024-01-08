import Image from "next/image";
import wizard from "../../public/assets/wizard.png";

const Player = () => {
  const position={x:300,y:300}


  return (
    <Image
      priority
      src={wizard}
      width={100}
      height={100}
      alt="wizard"
      style={{
        zIndex: 1,
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default Player;

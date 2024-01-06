import item from "../../public/magic-wand.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const Item = ({ playerBoundingbox, onCollision }) => {
  const [position, setPosition] = useState({ x: 700, y: 300 });

  /*useEffect(() => {
    const handleCollision = () => {
      const boundingBox = document.body.getBoundingClientRect();
      const elementBoundingBox = {
        width: 50,
        height: 50,
        top: position.y,
        bottom: position.y + 50,
        left: position.x,
        right: position.x + 50,
      };
  
      if (
        playerBoundingBox.top < elementBoundingBox.bottom &&
        playerBoundingBox.bottom > elementBoundingBox.top &&
        playerBoundingBox.left < elementBoundingBox.right &&
        playerBoundingBox.right > elementBoundingBox.left
      ) {
        // Colisão detectada
        // Execute a lógica de adicionar ao inventário
        onCollision();
      }
    };
  
    handleCollision();
  
    return () => {
      // Lógica de cleanup, se necessário
    };
  }, [onCollision, playerBoundingBox, position]);*/

  return (
    <Image
      priority
      src={item}
      width={50}
      height={50}
      alt="enemy"
      style={{
        zIndex: 1,
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default Item;

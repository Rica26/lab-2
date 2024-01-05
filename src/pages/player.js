import React, { useEffect, useState } from "react";
import Image from "next/image";
import wizard from "../../public/wizard.png";

const Player = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const step = 30;

  const handleKeyDown = (event) => {
    let newPosition = { ...position };
    switch (event.key) {
      case "ArrowUp":
        newPosition = { ...newPosition, y: newPosition.y - step };
        break;
      case "ArrowDown":
        newPosition = { ...newPosition, y: newPosition.y + step };
        break;
      case "ArrowLeft":
        newPosition = { ...newPosition, x: newPosition.x - step };
        break;
      case "ArrowRight":
        newPosition = { ...newPosition, x: newPosition.x + step };
        break;
      default:
        break;
    }

    const boundingBox = document.body.getBoundingClientRect();
    const elementBoundingBox = {
      width: 100,
      height: 100,
      top: newPosition.y,
      bottom: newPosition.y + 100,
      left: newPosition.x,
      right: newPosition.x + 100,
    };

    if (
      elementBoundingBox.top >= 0 &&
      elementBoundingBox.left >= 0 &&
      elementBoundingBox.bottom <= boundingBox.height &&
      elementBoundingBox.right <= boundingBox.width
    ) {
      setPosition(newPosition);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);

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
        left: position.x + "px",
        top: position.y + "px",
        animation: "pulse 1s infinite",
      }}
    />
  );
};

export default Player;

import { useEffect, useState } from "react";

export const Messaje = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (mouseEvent) => {
      const coords = { x: mouseEvent.x, y: mouseEvent.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    console.warn("Componente montado");
    return () => {
      console.warn("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  return (
    <div>
      <h3>Eres genial</h3>
      <p>
        x:{x}, y:{y}
      </p>
    </div>
  );
};

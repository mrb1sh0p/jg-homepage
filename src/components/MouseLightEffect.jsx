// src/components/MouseLightEffect.jsx
import React, { useEffect } from "react";

const MouseLightEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Atualiza as variáveis CSS no elemento raiz
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="lanterna" />;
};

export default MouseLightEffect;

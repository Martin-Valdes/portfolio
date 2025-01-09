import React, { useEffect, useRef } from "react";
import "./ButtonComponent.scss";

const ButtonComponent = () => {
  const buttonRefs = useRef([]);

  useEffect(() => {
    buttonRefs.current.forEach((button) => {
      if (!button) return;

      const handleMouseEnter = (e) => {
        const parentOffset = button.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        const circle = button.querySelector(".su_button_circle");
        circle.style.left = `${relX}px`;
        circle.style.top = `${relY}px`;
        circle.classList.remove("desplode-circle");
        circle.classList.add("explode-circle");
      };

      const handleMouseLeave = (e) => {
        const parentOffset = button.getBoundingClientRect();
        const relX = e.clientX - parentOffset.left;
        const relY = e.clientY - parentOffset.top;
        const circle = button.querySelector(".su_button_circle");
        circle.style.left = `${relX}px`;
        circle.style.top = `${relY}px`;
        circle.classList.remove("explode-circle");
        circle.classList.add("desplode-circle");
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="content">
      <h1>Bubble hover effect</h1>
      <div className="button_container">
        {["Link to Web Site", "GitHub"].map((text, index) => (
          <div className="button_su" ref={(el) => (buttonRefs.current[index] = el)} key={index}>
            <span className="su_button_circle"></span>
            <a href="#" className="button_su_inner">
              <span className="button_text_container">{text}</span>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ButtonComponent;
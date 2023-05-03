
import React from "react";

import '../MyComponent.css';


const Calender = () => {
    return (
        <div className="calendar-container">
          <iframe 
  src="https://calendar.google.com/calendar/embed?src=dogeexotics%40gmail.com&ctz=America%2FPhoenix" 
  width="100%" 
  height="800" 
  frameborder="0" 
  scrolling="no"
  title="Doge Exotics Calendar">
</iframe>
        </div>
      );
};

export default Calender;

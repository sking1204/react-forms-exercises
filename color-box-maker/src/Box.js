import React from "react";


/** Individual colored box.
 *
 * Props:
 * - color: color of box
 * -width
 * -height
 **/
function Box({
    id,      
    width = 150,
    height = 150,
    handleRemove,
    backgroundColor = "teal"

 }) {
    const removeBox = () => handleRemove(id);
  return (
    <div>
      <div
          className="Box"
          style={{
             width: `${width}px`,
             height: `${height}px`,
             backgroundColor
             }}
      />
      <button onClick={removeBox}>Remove Box!</button>
      </div>

  );
}

export default Box;
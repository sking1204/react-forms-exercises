import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";



const BoxList = () =>{     
    const [boxes, setBoxes] = useState([])
    const createBox = newBoxObj =>{
        setBoxes(boxes => [...boxes, newBoxObj])
    }

    const removeBox = id =>{
        setBoxes(boxes => boxes.filter(box => box.id !==id));
    };

    const boxComponents = boxes.map(box =>(
        <Box
        key={box.id}
        id={box.id}
        width={box.width}
        height={box.height}
        handleRemove={removeBox}
        backgroundColor={box.backgroundColor}
        />
    ));

    return(
        <div>            
            <NewBoxForm createBox={createBox} />
            <section className="BoxesList">{boxComponents}</section>        
        </div>
    );
}






export default BoxList;







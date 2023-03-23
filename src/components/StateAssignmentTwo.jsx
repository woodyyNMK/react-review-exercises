import { useState } from "react";
function StateAssignmentTwo(){
    const[count, setCount] =useState(0);
    const clickHandler =()=>{
        setCount(count+1);
    }
    return(
        <section>
            <button onClick={clickHandler}>
                Click Me!
            </button>
            
        </section>
    );
}
export default StateAssignmentTwo;
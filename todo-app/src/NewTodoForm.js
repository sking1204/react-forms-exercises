import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({createTodo}) =>{     
    
   const [taskData, setTaskData] = useState("");

   const handleChange = e =>{
    const {name, value} = e.target; 
    setTaskData(taskData => ({
        ...taskData,
        [name]: value
    }));
   };

   const handleSubmit = (e) =>{
    e.preventDefault();
    createTodo({...taskData, id:uuid()});
    setTaskData({ ...taskData, task: "" });
   };

   return(
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor ="task">Task</label>
                <input
                    type="text"
                    placeholder="todo item goes here"
                    name="task"
                    id="task"
                    value={taskData.task}
                    onChange={handleChange} 
                />
            </div> 
                <button>Add to list!</button>           
        </form>
    </div>
   ) 
} 

export default NewTodoForm;

//Question for mentor:

//When I try to use task instead of taskData, when I add a new todo 
//item, [object, object] appears in the input.

// import React, {useState} from "react";
// import { v4 as uuid } from 'uuid';

// const NewTodoForm = ({createTodo}) =>{     
    
//    const [task, setTask] = useState("");

//    const handleChange = e =>{
//     const {name, value} = e.target; 
//     setTask(task => ({
//         ...task,
//         [name]: value
//     }));
//    };

//    const handleSubmit = (e) =>{
//     e.preventDefault();
//     createTodo({...task, id:uuid()});
//     setTask("");  
//    };

//    return(
//     <div>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor ="task">Task</label>
//                 <input
//                     type="text"
//                     placeholder="todo item goes here"
//                     name="task"
//                     id="task"
//                     value={task}
//                     onChange={handleChange} 
//                 />
//             </div> 
//                 <button>Add to list!</button>           
//         </form>
//     </div>
//    ) 
// } 

// export default NewTodoForm;
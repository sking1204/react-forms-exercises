import React, {useState} from "react";


/** Individual todo item.
 *
 * Props:
 * - todo: todo item description
 * -
 * 
 **/
function Todo({
    id,     
    task ="default todo",
    handleRemove,
    handleEdit    
}) {
/////////////////////////
//FROM SB SOLUTION:

    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
      };
    
      const handleChange = evt => {
        setEditTask(evt.target.value);
      };
    
      const handleDelete = () => handleRemove(id);
    
      const handleUpdate = evt => {
        evt.preventDefault();
        handleEdit(id, editTask);
        setIsEditing(false);
      };
    
      // default todo view
      let todoView = (
        <div>
          <li>{task}</li>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={handleDelete}>X</button>
        </div>
      );
    
      // todo view when editing
      if (isEditing) {
        todoView = (
          <div>
            <form onSubmit={handleUpdate}>
              <input type="text" value={editTask} onChange={handleChange} />
              <button>Update!</button>
            </form>
          </div>
        );
      }

      return todoView;
}




////////////////////

//     const removeTodo = () =>handleRemove(id);
//     const editTodo = () =>handleEdit(id);
//   return (
    
//     <div className="todo">         
//         <li>{id}</li>
//         <li>{task}</li> 
//         <button onClick={removeTodo}>X</button>     
//         <button onClick={editTodo}>Edit</button>     
            
//     </div>

//   );
// }


export default Todo;
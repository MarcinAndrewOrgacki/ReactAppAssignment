import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
  
  return (
    <>{/* forEach (task) =>(do) (<Task key={task.id} task={task}/>)*/}
      {tasks.map((task) => (
      <Task key={task.id} task={task} 
      onDelete={onDelete} 
      onToggle={onToggle}/>))} {/* since it is a list, you must assign a key(key={task.id}) */}
       
    </>
  )
}

export default Tasks

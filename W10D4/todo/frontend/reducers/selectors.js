
const allTodos = (states) => (
  Object.keys(states.todos).map( id => states.todos[id] )
)

export default allTodos;


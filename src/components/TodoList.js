import React, { useContext } from 'react';
import { AbilityContext, Can } from './Can';

export default function TodoList() {
  const todos = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Walk the dog' },
    { id: 3, title: 'Do laundry' },
  ];
  const ability = useContext(AbilityContext);
    const handleDelete = (todo) => {
    // implement delete logic here
    console.log('Deleting todo:', todo);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <Can I="read" a="Todo" this={todo} key={todo.id}>
            <li>
              <span>{todo.title}</span>
              <Can I="update" a="Todo" this={todo}>
                <button>Edit</button>
              </Can>
              {/* <Can I="delete" a="Todo" this={todo} passThrough>
  {({ allowed }) => allowed && (
    <button onClick={() => handleDelete(todo)}>Delete</button>
  )}
</Can> */}
 <Can I="delete" a="Todo" this={todo}>
 {/* <Can not I="delete" a="Todo" this={todo}> */}
                <button onClick={() => handleDelete(todo)}>Delete</button>
              </Can>
            </li>
          </Can>
        ))}
      </ul>
    </div>
  );
}

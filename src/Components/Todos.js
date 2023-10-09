import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <p className="card-text"><small className="text-muted">Published: {todo.publishedTime}</small></p>
        <button className="btn btn-danger" onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  );
}

function Todos({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.sn} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export { Todos };

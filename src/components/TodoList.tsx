import { useEffect } from "react";
import { UseActions } from "../hooks/UseActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const pages = [1, 2, 3, 4, 5];

const TodoList: React.FC = () => {
  const { todos, error, loading, limit, page } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = UseActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p, index) => (
          <div
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: "10px",
            }}
            key={index}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

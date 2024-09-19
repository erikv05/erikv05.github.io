import React, { useState } from "react";
import Auth from "./Auth";
import TodoList from "./Todo";

const TodoWithAuth: React.FC = () => {
  const [user, setUser] = useState<{ email: string; token: string } | null>(
    null
  );

  return (
    <div>
      {user ? (
        <TodoList user={user} />
      ) : (
        <Auth onAuth={(user: React.SetStateAction<{ email: string; token: string; } | null>) => setUser(user)} />
      )}
    </div>
  );
};

export default TodoWithAuth;
import React, { useState } from "react";
import Auth from "./Auth";
import TodoList from "./Todo";

const TodoWithAuth: React.FC = () => {
  const [user, setUser] = useState<{ email: string; token: string } | null>(
    null
  );

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <TodoList user={user} />
        </>
      ) : (
        <Auth onAuth={(user) => setUser(user)} />
      )}
    </div>
  );
};

export default TodoWithAuth;

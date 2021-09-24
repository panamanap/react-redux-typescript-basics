import { useEffect } from "react";
import { UseActions } from "../hooks/UseActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = ()   => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const { fetchUsers } = UseActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('users', users);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;

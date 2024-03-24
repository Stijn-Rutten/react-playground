// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    userService.delete(id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const createUser = () => {
    const originalUsers = [...users];
    const newUser: User = { id: 0, name: "John Poo Poo" };
    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " Updated" };
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger m-3">{error}</p>}
      <button className="btn-primary btn mb-3" onClick={createUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;

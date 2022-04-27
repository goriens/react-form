import { useEffect, useState } from "react";
import "../../src/App.css";

export const ShowData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="main-show">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>maritalState</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td>{el.address}</td>
              <td>{el.department}</td>
              <td>{el.salary}</td>
              <td>{el.maritalState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

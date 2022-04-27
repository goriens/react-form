import { useState } from "react";
import Axios from "axios";

export const Form = () => {
  const url = "http://localhost:5000/users";
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalState: "",
  });
  const handleChange = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: formData.name,
      age: formData.age,
      address: formData.address,
      department: formData.department,
      salary: formData.salary,
      maritalState: formData.maritalState,
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handleChange(e)}
        value={formData.name}
        type="text"
        placeholder="Enter Your Name"
        id="name"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={formData.age}
        type="number"
        placeholder="Enter Your Age"
        id="age"
      />
      <input
        onChange={(e) => handleChange(e)}
        value={formData.address}
        type="text"
        placeholder="Entre your address"
        id="address"
      />
      <select
        onChange={(e) => handleChange(e)}
        value={formData.department}
        id="department"
      >
        <optgroup label="Choose option"></optgroup>
        <option>department-1</option>
        <option>department-2</option>
        <option>department-3</option>
        <option>department-4</option>
        <option>department-5</option>
      </select>
      <input
        onChange={(e) => handleChange(e)}
        value={formData.salary}
        type="text"
        placeholder="Enter Your Salary"
        id="salary"
      />
      <div>
        Married
        <input
          onChange={(e) => handleChange(e)}
          id="maritalState"
          type="radio"
          value={"Married"}
        />{" "}
        Unmarried{" "}
        <input
          onChange={(e) => handleChange(e)}
          id="maritalState"
          type="radio"
          value={"Unmarried"}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

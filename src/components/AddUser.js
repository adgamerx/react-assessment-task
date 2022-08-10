import axios from "axios";
import { useState } from "react";
const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://mongodb-react-api.herokuapp.com/users", user);
      console.log("user added");
    } catch (e) {
      console.log("got an error");
    }
  }

  return (
    <div className="w-2/3">
      <input
        type="text"
        className="block border rounded py-2 px-3 w-full mt-3 focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-[#524af4]"
        placeholder="Your Name"
        autoComplete="on"
        name="name"
        onChange={(e) => onTextFieldChange(e)}
      />
      <input
        type="email"
        className="block border rounded py-2 px-3 w-full mt-3 focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-[#524af4]"
        placeholder="your@domain.com"
        autoComplete="on"
        name="email"
        onChange={(e) => onTextFieldChange(e)}
      />
      <button
        className="bg-[#524af4] tracking-wider text-lg hover:bg-[#524af4] w-full text-white my-3 font-medium py-2 rounded focus:outline-none focus:shadow-outline"
        onClick={(e) => onFormSubmit(e)}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;

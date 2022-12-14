import axios from "axios";
import { useState } from "react";

const UpdateUser = () => {
  const [user, setUser] = useState({
    email: "",
  });

  const [counter, setCounter] = useState(0)

  const addCount = () => {
    setCounter(counter + 1)
  }

  var [id, setID] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.patch(
        `https://mongodb-react-api.herokuapp.com/users/${id}`,
        { email: user.email}
      );
      console.log("email updated");
      addCount();
    } catch (e) {
      console.log("got an error");
    }
  }
  function onTextFieldChange(e) {
    setUser({
      "email": e.target.value,
    });
  }

  function onIdChange(e) {
    setID(e.target.value);
  }

  return (
    <div className="w-2/3">
      <input
        type="text"
        className="block border rounded py-2 px-3 w-full mt-3 focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-[#524af4]"
        placeholder="enter id"
        name="_id"
        onChange={(e) => onIdChange(e)}
        autoComplete="on"
      />
      <input
        type="email"
        className="block border rounded py-2 px-3 w-full mt-3 focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-[#524af4]"
        placeholder="New email"
        onChange={(e) => onTextFieldChange(e)}
        autoComplete="on"
      />
      <button
        className="bg-[#524af4] tracking-wider text-lg hover:bg-[#524af4] w-full text-white my-3 font-medium py-2 rounded focus:outline-none focus:shadow-outline"
        onClick={(e) => onFormSubmit(e)}
      >
        Update
      </button>
      <div>
        Update User Clicked: {counter} times <br />(only updates on successfull Updation)
      </div>
    </div>
  );
};

export default UpdateUser;

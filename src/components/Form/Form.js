import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Form.styles";
import { FaUserCircle } from "react-icons/fa";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();

  const getUsername = () => {
    const savedUsers = JSON.parse(localStorage.getItem("login"));
    return savedUsers || { users: [], nextID: 0 };
  };

  const setUsername = () => {
    let result = getUsername();
    if (result.users) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          nextID: ++result.nextID,
          lastActive: 0,
          users: [
            ...result.users,
            {
              username: inputValue.toLowerCase(),
              id: result.nextID,
              status: "active",
            },
          ],
        })
      );
    }
  };

  return (
    <Wrapper className="container">
      <Wrapper className="grid">
        <form
          className="form login"
          onSubmit={(e) => {
            e.preventDefault();
            setUsername();
            let id = JSON.parse(localStorage.getItem("login")).nextID;
            setInputValue("");
            navigate(`/${id}`);
          }}
        >
          <div className="form__field">
            <label htmlFor="login__username">
              <FaUserCircle className="form__icon" />
              <span className="hidden">Username</span>
            </label>
            <input
              autoComplete="none"
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              value={inputValue}
              required
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </Wrapper>
    </Wrapper>
  );
};

export default Form;

import { useNavigate, useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ username }) => {
  let { id } = useParams();
  let navigate = useNavigate();
  const redirect = () => {
    let result = JSON.parse(localStorage.getItem("login"));
    let updatedUsers = result.users.filter((user) => user.id !== +id);
    localStorage.setItem(
      "login",
      JSON.stringify({
        nextID: result.nextID,
        lastActive: result.lastActive,
        users: updatedUsers,
      })
    );
    navigate("/login");
  };

  return (
    <Wrapper className="container">
      <Wrapper className="header">
        <div className="logo__wrapper">
          <a href="#0">
            <div className="logo"></div>
          </a>
          <span className="username">{username}</span>
        </div>
        <nav className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/login" className="pd-2" target="_blank">
                Signin with different user?{" "}
              </Link>
            </li>
            <li className="nav__item">
              <input type="submit" value="Logout" onClick={redirect} />
            </li>
          </ul>
        </nav>
      </Wrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  &.container {
    display: grid;
    background-color: var(--bodyBackgroundColor);
    padding-block: 0.75rem;
    z-index: 4;
    position: sticky;
  }

  &.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 40px;
  }

  .nav__list {
    display: flex;
    align-items: center;
  }
  .header input[type="submit"] {
    border-radius: var(--loginBorderRadus);
    padding: 0.5rem 1.125rem;
    inline-size: 100%;
  }

  .header input[type="submit"] {
    background-color: var(--loginSubmitBackgroundColor);
    color: var(--loginSubmitColor);
    font-weight: 700;
  }

  .header input[type="submit"]:focus,
  .header input[type="submit"]:hover {
    background-color: var(--loginSubmitHoverBackgroundColor);
  }

  .logo__wrapper {
    display: flex;
    align-items: center;
    color: var(--anchorColor);
  }

  .logo {
    background-color: #d75269;
    border-radius: 50%;
    inline-size: 40px;
    height: 40px;
  }

  .username {
    font-weight: 700;
    margin-inline-start: 1rem;
  }

  .pd-2 {
    margin-right: 2rem;
  }
`;

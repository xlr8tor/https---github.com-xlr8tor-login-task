import Header from "../Header/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import List from "../List/List";

const Home = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const getUser = () => {
    const savedUsers = JSON.parse(localStorage.getItem("login")).users.find(
      (user) => user.id === +id
    );
    return savedUsers;
  };

  let [user, setUser] = useState(getUser());

  useEffect(() => {
    const onStateChange = () => {
      let user = getUser();
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    };
    if (!user) {
      navigate("/login");
    }

    window.addEventListener("storage", onStateChange);
    return () => {
      window.removeEventListener("storage", onStateChange);
    };
  }, [navigate]);

  return (
    <>
      {user && (
        <div>
          <Header username={user.username} />
          <List />
        </div>
      )}
    </>
  );
};

export default Home;

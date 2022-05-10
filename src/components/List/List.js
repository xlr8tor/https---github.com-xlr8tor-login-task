import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "./List.styles";

const List = () => {
  let { id } = useParams();

  const getFilteredUser = () => {
    const savedUsers = JSON.parse(localStorage.getItem("login")).users.filter(
      (user) => user.id != id
    );
    return savedUsers;
  };

  const [filteredUsers, setUsers] = useState(getFilteredUser());
  const [isVisible, setIsVisible] = useState(document.visibilityState);

  const deleteItem = (id) => {
    let filteredArray = filteredUsers.filter((user) => user.id !== +id);
    setUsers(filteredArray);
    let result = JSON.parse(localStorage.getItem("login"));
    localStorage.setItem(
      "login",
      JSON.stringify({
        nextID: result.nextID,
        users: result.users.filter((user) => user.id !== +id),
      })
    );
  };

  const countdown = () => {
    return setTimeout(() => {
      let result = JSON.parse(localStorage.getItem("login"));
      let updatedUser = result.users.map((user) => {
        if (user) {
          user.status = "idle";
        }
        return user;
      });
      localStorage.setItem(
        "login",
        JSON.stringify({
          nextID: result.nextID,
          lastActive: result.lastActive,
          users: updatedUser,
        })
      );
      let updatedState = updatedUser.filter((user) => user.id !== +id);
      setUsers(updatedState);
    }, 60000);
  };

  const clearCountdown = () => {
    return setTimeout(() => {
      let result = JSON.parse(localStorage.getItem("login"));
      let updatedUser = result.users.map((user) => {
        if (user.id === +id) {
          user.status = "active";
        }
        return user;
      });
      localStorage.setItem(
        "login",
        JSON.stringify({
          nextID: result.nextID,
          lastActive: result.lastActive,
          users: updatedUser,
        })
      );
      let updatedState = updatedUser.filter((user) => user.id !== +id);
      setUsers(updatedState);
    }, 0);
  };

  useEffect(() => {
    const onStorage = () => {
      setUsers(getFilteredUser());
    };

    if (isVisible === "visible") {
      let result = JSON.parse(localStorage.getItem("login"));
      localStorage.setItem(
        "login",
        JSON.stringify({
          nextID: result.nextID,
          lastActive: id,
          users: result.users,
        })
      );
      clearCountdown();
    }

    const onVisibilityChange = () => {
      setIsVisible(document.visibilityState);
      let timerID;
      if (isVisible === "hidden") {
        timerID = countdown();
      } else {
        clearTimeout(timerID);
        clearCountdown();
      }
    };

    window.addEventListener("storage", onStorage);
    window.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("visibilitychange", onVisibilityChange);
    };
  });

  return (
    <Container className="content__wrapper">
      {filteredUsers && (
        <Wrapper
          className="list"
          style={{
            border: filteredUsers.length > 0 ? "1px solid #10121b66" : null,
          }}
        >
          {filteredUsers.map((user) => {
            return (
              <li key={user.id} className="list__item">
                <div>
                  <span
                    className="status"
                    style={{
                      backgroundColor:
                        user.status === "idle" ? "#9b111e" : "green",
                    }}
                  ></span>
                  {user.status}
                </div>
                <div>{user.username}</div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    deleteItem(user.id);
                  }}
                >
                  Logout
                </button>
              </li>
            );
          })}
        </Wrapper>
      )}
    </Container>
  );
};

export default List;

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSlice } from "../store/user.slice";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const toUsers = () => {
    navigator("/users");
  };

  const changeUser = () => {
    dispatch(
      userSlice.actions.changeUser({
        username: "john_doe",
        country: "USA",
      }),
    );
  };

  return (
    <>
      <h4>Home Component</h4>
      <button className="btn btn-primary" onClick={toUsers}>
        To Users
      </button>

      <button className="btn btn-primary ms-5" onClick={changeUser}>
        Change User
      </button>
    </>
  );
};

export default Home;

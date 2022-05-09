import React, { Fragment, useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import Dropdown from "../components/Dropdown";
import "./Settings.css";
import UserCard from "../components/UserCard";

// const User = {
//   name: "Bill Mason",
//   loginTime: "5h ago",
//   phoneNo: "705-151-8674",
//   email: "giovanni_kris@pagac.biz",
//   plan: "professional",
//   start: "April 1, 2019",
//   renew: "Monthly",
// };

const dropdown1 = {
  title: "Plan",
  items: ["Early-Bird", "Starter", "Professional"],
};

const dropdown2 = {
  title: "Renew",
  items: ["Monthly", "Annually", "Cancelled"],
};

const dropdown3 = {
  title: "Status",
  items: ["Active", "Cancelled"],
};

const Settings = () => {
  const [users, setUsers] = useState([]);
  const [keyword, setKeyword] = useState("");

  const getFilteredUsers = async () => {
    const { data } = await axios.get(`/api/v1/search/${keyword}`);

    console.log("filtered data of user...", data.user);

    setUsers(data.user);
  };

  const getUsersAgain = async () => {
    const { data } = await axios.get("/api/v1/getusers");

    console.log("DAta is here again....", data);

    console.log("data of user again...", data.user);

    setUsers(data.user);
  };

  const getUsers = async () => {
    const { data } = await axios.get("/api/v1/getusers");

    console.log("DAta is here....", data);

    console.log("data of user...", data.user);

    setUsers(data.user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="settingsContainer">
        <div className="left-col">
          <p>Search</p>
          <input
            type="text"
            placeholder="Name, Phone, Email.."
            onKeyDown={getUsersAgain}
            onKeyUp={getFilteredUsers}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <Dropdown options={dropdown1} />

          <Dropdown options={dropdown2} />

          <Dropdown options={dropdown3} />
        </div>

        <div className="right-col">
          <h2>Settings</h2>
          <p>Users</p>
          <div className="table">
            <div className="table-header">
              <div>
                <p>name</p>
                <FaCaretDown />
              </div>
              <div>
                <p>detail</p>
                <FaCaretDown />
              </div>
              <div>
                <p>plan</p>
                <FaCaretDown />
              </div>
              <div>
                <p>start</p>
                <FaCaretDown />
              </div>
              <div>
                <p>renew</p>
                <FaCaretDown />
              </div>
            </div>

            <div className="table-list">
              <ul>
                {users &&
                  users.map((user, index) => {
                    return (
                      <Fragment>
                        <UserCard key={user._id} User={user} />{" "}
                        {users.length > index + 1 && <hr />}
                      </Fragment>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;

import React, { Fragment } from "react";

const UserCard = ({ User }) => {
  return (
    <Fragment>
      <li>
        <div className="name-area">
          <div className="user-emoticon">
            {User.name
              .split(" ")
              .map((item) => item[0])
              .join("")}
          </div>
          <p>{User.name}</p>
          <span>Login {User.createdAt}</span>
        </div>

        <div className="detail-area">
          <p>{User.details && User.details.phoneNo}</p>
          <span>{User.details && User.details.email}</span>
        </div>

        <p>{User.plan}</p>

        {/* <p>{String(User.createdAt).substr(0, 10)}</p> */}
        <p>{User.start}</p>

        <p>{User.renew}</p>
      </li>
    </Fragment>
  );
};

export default UserCard;

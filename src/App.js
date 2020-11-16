import React from "react";
import "./style.css";

const user = {
  firstName: "Harper",
  lastName: "Perez"
};

function formatUser(myUser) {
  if (myUser) {
    return (
      <h1 className="greeting">
        {myUser.firstName} : {myUser.lastName}
      </h1>
    );
  }
  return;
}

function formatUser2(myUser) {
  return myUser.firstName + " " + myUser.lastName;
}
function getGreets(myUser) {
  if (myUser) {
    return <h1 className="greeting">Hello, {formatUser2(myUser)}!</h1>;
  } else {
    return <h1 className="greeting">Hello,!!!!</h1>;
  }
}
export default function App() {
  return getGreets(user);
}

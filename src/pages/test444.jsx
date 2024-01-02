import { useState } from "react";

export const Parent = () => {
  const [username, setUsername] = useState("James");

  return (
    <div className="m-[3rem]">
      <h2>
        This should be the username:{" "}
        <span className="font-bold">{username}</span>
        <Child setUsernameProp={setUsername} />
      </h2>
    </div>
  );
};

export const Child = ({ setUsernameProp }) => {
  //   setUsernameProp("Peter");
  return (
    <div>
      <h3>This should be the child prop feed</h3>
      {/* <GrandChild setGrandChildProp={setUsernameProp} /> */}
    </div>
  );
};

export const GrandChild = ({ setGrandChildProp }) => {
  //   setGrandChildProp("Amadioha");
  return (
    <div className="mt-[1rem]">
      <h3>This is from the grand child</h3>
      <GreatGrandChild setGreatGrandChildProp={setGrandChildProp} />
    </div>
  );
};

export const GreatGrandChild = ({ setGreatGrandChildProp }) => {
  setGreatGrandChildProp("Progressgpl");
  return (
    <div className="mt-[1rem]">
      <h3>This is from the great grand child</h3>
    </div>
  );
};

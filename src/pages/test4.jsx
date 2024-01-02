import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [username, setUsername] = useState("James");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="m-[3rem]">
        <h2>
          This should be the username:{" "}
          <span className="font-bold">{username}</span>
          <Child />
          <GrandChild />
          <GreatGrandChild />
        </h2>
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  // const { username, setUsername } = useContext(AppContext);
  // setUsername("Patriot");
  console.log(username !== "" && username);
  return (
    <div>
      <h3>
        {/* This should be the child prop feed: {username !== undefined && username} */}
      </h3>
      <h3>This should be the child prop feed:</h3>
    </div>
  );
};

export const GrandChild = () => {
  // const { username, setUsername } = useContext(AppContext);
  // setUsername("Patriot");
  return (
    <div className="mt-[1rem]">
      <h3>This is from the grand child</h3>
    </div>
  );
};

export const GreatGrandChild = () => {
  const { username, setUsername } = useContext(AppContext);
  setUsername("Patriot");
  return (
    <div className="mt-[1rem]">
      <h3>This is from the great grand child</h3>
    </div>
  );
};

import React from 'react';
import Profile from "./Profile/Profile";
import user from "../data/user";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};

export default App;

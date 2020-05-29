import React from "react";
import DragonCard from "./DragonCard";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const dragons = useSelector((state) => state.homeDragons); // <-- Use a hook to retrieve home dragons from state
  const dispatch = useDispatch(); // <-- Use a hook to get the dispatch function
  return (
    <div
      style={{
        float: "left",
        width: "40%",
        padding: "5%",
        backgroundColor: "#00ffd8",
      }}
    >
      <h1>Home</h1>
      {dragons.map((dragon) => (
        <DragonCard
          dragon={dragon}
          onClick={() => dispatch({ type: "SEND_TO_WAR", dragon: dragon })}
        />
      ))}
    </div>
  );
}

export default Home;

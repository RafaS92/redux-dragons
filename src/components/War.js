import React from "react";
import DragonCard from "./DragonCard";
import { useSelector, useDispatch } from "react-redux";
function War() {
  const dragons = useSelector((state) => state.warDragons); // <-- Use a hook to retrieve war dragons from state
  const dispatch = useDispatch(); // <-- Use a hook to get the dispatch function
  return (
    <div
      style={{
        float: "left",
        width: "40%",
        padding: "5%",
        backgroundColor: "#f98181",
      }}
    >
      <h1>War</h1>
      {dragons.map((dragon) => (
        <DragonCard
          dragon={dragon}
          onClick={
            () =>
              dispatch({
                type: "SEND_TO_HOME",
                dragon: dragon,
              }) /* Dispatch an action that will move a dragon home */
          }
        />
      ))}
    </div>
  );
}

export default War;

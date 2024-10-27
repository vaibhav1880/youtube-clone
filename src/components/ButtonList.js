import React from "react";
import Button from "./Button";

// const list = ["All", "Songs", "Live", "Cricket", "News", "Cooking", "Gaming"]

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Gaming" />
    </div>
  );
};

export default ButtonList;

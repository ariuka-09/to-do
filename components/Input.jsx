"use client";
import { useState } from "react";
import { Button } from "./Button";

export function Input(props) {
  const { placeholder, addElement } = props;
  const [task, setTask] = useState("");
  const deletion = () => {
    setTask("");
  };
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="w-[345px] h-[38px] rounded px-[16px] py-[24px] border-[1px] border-black/20 "
        placeholder={placeholder}
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <div onClick={deletion}>
        <Button
          color="bg-[#3C82F6]"
          text="Add"
          className="hover-pointer"
          givenFunction={() => addElement(task)}
          setTask={setTask}
        ></Button>
      </div>
    </div>
  );
}

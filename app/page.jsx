"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ListElement } from "@/components/ListElement";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  const addElement = (text) => {
    setList([...list, { text: text, id: Math.random(), checked: checked }]);
  };
  console.log(list);
  const handleDelete = (id) => {
    const filterredList = list.filter((todo) => todo.id !== id);
    setList(filterredList);
    console.log(id);
  };
  const completed = (id) => {
    list.map((el) => {
      if (el.id == id) {
        setChecked(!checked);
      }
    });
  };

  return (
    <div className="flex justify-center items-center w-full ">
      <div className="px-4 py-6 w-fit h-fit flex flex-col gap-4 border-2 shadow">
        <div className="flex gap-[6px] ">
          <Input
            placeholder="Add a new task..."
            addElement={addElement}
          ></Input>
        </div>
        <div className="flex gap-2">
          <Button text="All" color="bg-[#3C82F6]"></Button>
          <Button text="Active" color="bg-[#F3F4F6]"></Button>
          <Button text="Completed" color="bg-[#F3F4F6]"></Button>
        </div>

        {list.map((el, index) => {
          return (
            <ListElement
              key={index}
              element={el}
              handleDelete={handleDelete}
              completed={completed}
              checked={checked}
            ></ListElement>
          );
        })}
      </div>
    </div>
  );
}

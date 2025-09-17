"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ListElement } from "@/components/ListElement";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export default function Home() {
  const [list, setList] = useState([]);
  const [fullArray, setFullArray] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const addElement = (text) => {
    const unique = uuidv4();
    const uniquefr = unique;
    setList([...list, { text: text, id: uniquefr, checked: false }]);
  };

  const handleDelete = (id) => {
    const filterredList = list.filter((todo) => todo.id !== id);
    setList(filterredList);
    console.log(id);
  };
  const completed = (id) => {
    const newList = list.map((el) => {
      if (el.id === id) el.checked = !el.checked;
      return el;
    });
    setList(newList);
    console.log(newList, "list");
  };
  const showAll = () => {
    setFilterType("All");
  };
  const showActive = () => {
    setFilterType("Active");
  };
  const showCompleted = () => {
    setFilterType("Completed");
  };
  const filterredList = list.filter((el) => {
    if (filterType == "All") {
      return true;
    } else if (filterType == "Active") {
      return !el.checked;
    } else if (filterType == "Completed") {
      return el.checked;
    }
  });
  let number = 0;
  list.map((el) => {
    if (el.checked) {
      number++;
    }
  });
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
          <Button
            text="All"
            color="bg-[#3C82F6]"
            givenFunction={showAll}
          ></Button>
          <Button
            text="Active"
            color="bg-[#F3F4F6]"
            givenFunction={showActive}
          ></Button>
          <Button
            text="Completed"
            color="bg-[#F3F4F6]"
            givenFunction={showCompleted}
          ></Button>
        </div>

        {filterredList.map((el) => {
          return (
            <ListElement
              key={el.id}
              element={el}
              handleDelete={handleDelete}
              completed={completed}
            ></ListElement>
          );
        })}
        <div className="bg-blue-50 h-10 w-full flex gap-4">
          <p>Total tasks: {list.length}</p>

          <p>Completed: {number}</p>
        </div>
      </div>
    </div>
  );
}

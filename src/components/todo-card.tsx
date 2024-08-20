"use client";

import { CardProps } from "@/app/page";
import { useState } from "react";
import { BiCheck, BiPencil } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

export default function ToDoCard({
  title,
  items,
  setItems,
}: {
  title: string;
  items: CardProps[];
  setItems: (items: CardProps[]) => void;
}) {
  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className="flex justify-between w-[400px] gap-4">
      <div className="flex gap-2">
        <div
          className="size-6 bg-violet-700 rounded-md cursor-pointer"
          onClick={() => setDone(!done)}
        >
          {done ? <BiCheck size={24} /> : null}
        </div>
        <h4>{title}</h4>
      </div>

      <div className="flex gap-2 [&>*]:cursor-pointer">
        <CgClose
          size={24}
          onClick={() => setItems(items.filter((item) => item.title !== title))}
        />
        <BiPencil size={24} />
      </div>
    </div>
  );
}

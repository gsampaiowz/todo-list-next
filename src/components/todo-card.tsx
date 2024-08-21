"use client";

import { TaskProps } from "@/app/page";
import { SetStateAction, useState } from "react";
import { BiCheck, BiCheckCircle, BiPencil, BiTrash } from "react-icons/bi";
import Input from "./input";
import { toast } from "react-hot-toast";

export default function ToDoCard({
  task,
  items,
  setItems,
}: {
  task: TaskProps;
  items: TaskProps[];
  setItems: React.Dispatch<SetStateAction<TaskProps[]>>;
}) {
  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  return (
    <div className="flex justify-between w-full min-h-8 gap-4">
      <div className="flex gap-2 w-full items-center">
        {edit ? (
          <Input
            className="border-b-[1px] border-white/50 "
            placeholder="Título da tarefa"
            value={editedTask}
            setValue={setEditedTask}
          />
        ) : (
          <>
            <div
              className="size-6 bg-violet-700 rounded-md cursor-pointer"
              onClick={() => setDone(!done)}
            >
              {done ? <BiCheck size={24} /> : null}
            </div>
            <h4>{task.title}</h4>
          </>
        )}
      </div>

      <div className="flex items-center [&>*]:cursor-pointer [&>*]:mx-1 [&>*]:transition-all">
        <BiTrash
          size={24}
          onClick={() => {
            setItems(items.filter((item) => item.id !== task.id));

            toast.success("Tarefa deletada com sucesso");
          }}
        />

        <BiCheckCircle
          size={24}
          className={edit ? "" : "size-0 !mx-0"}
          onClick={() => {
            setEdit(false);
            const updatedItems = items.map((item) =>
              item.id === task.id ? { ...item, title: editedTask } : item
            );
            setItems(updatedItems);
            toast.success("Tarefa editada com sucesso");
          }}
        />
        <BiPencil
          className={!edit && !done ? "" : "size-0 !mx-0"}
          onClick={() => {
            setEdit(true);
          }}
          size={24}
        />
      </div>
    </div>
  );
}

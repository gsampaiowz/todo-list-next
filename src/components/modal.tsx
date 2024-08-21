"use client";

import { TaskProps } from "@/app/page";
import Button from "./button";
import Input from "./input";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function Modal({
  open,
  setOpen,
  items,
}: {
  open: boolean;
  setOpen: Function;
  items: TaskProps[];
}) {
  const [novaTask, setNovaTask] = useState("");

  return (
    <div
      className={
        "absolute flex items-center overflow-hidden transition-opacity size-full duration-500 justify-center left-0 backdrop-blur-md " +
        (open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none")
      }
    >
      <div className="p-6 rounded-lg flex flex-col gap-6 bg-violet-950">
        <h1>Descreva sua tarefa</h1>
        <Input
          value={novaTask}
          setValue={setNovaTask}
          placeholder="Título da tarefa"
          className="border-b-2 border-white"
        />
        <Button
          onClick={() => {
            if(novaTask == "") return toast.error("Preencha o campo de tarefa!");
            setOpen(false);
            items.push({ title: novaTask, id: items.length + 1 });
            toast.success("Tarefa criada com sucesso!");
            setNovaTask("");
          }}
          text="Confirmar tarefa"
        />
        <Button text="Cancelar" onClick={() => setOpen(false)} />
      </div>
    </div>
  );
}

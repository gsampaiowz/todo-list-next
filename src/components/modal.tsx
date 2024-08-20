"use client";

import { CardProps } from "@/app/page";
import Button from "./button";
import Input from "./input";
import { useState } from "react";

export default function Modal({
  open,
  setOpen,
  items,
}: {
  open: boolean;
  setOpen: Function;
  items: CardProps[];
}) {
  const [novaTask, setNovaTask] = useState("");

  return (
    <div
      className={
        "absolute flex items-center fade-in transition-all justify-center w-full h-full left-0 bg-white/10 backdrop-blur-lg " +
        (open ? "block" : "hidden")
      }
    >
      <div className="p-6 rounded-lg flex flex-col gap-6 bg-violet-950">
        <h1>Descreva sua tarefa</h1>
        <Input
          value={novaTask}
          setValue={setNovaTask}
          placeholder="Exemplo de tarefa"
        />
        <Button
          onClick={() =>
            items.push({ title: novaTask, done: false, edit: false })
          }
          text="Confirmar tarefa"
        />
        <Button text="Cancelar" onClick={() => setOpen(false)} />
      </div>
    </div>
  );
}

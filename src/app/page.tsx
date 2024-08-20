"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
import ToDoCard from "@/components/todo-card";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export type CardProps = { title: string; done: boolean; edit: boolean };

export default function Home() {
  const dataAtualExtenso = new Date().toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const dataAtualFormatada = dataAtualExtenso
    .split(" ")
    .map((word) =>
      word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");

  const [items, setItems] = useState([]);

  const [textoBusca, setTextoBusca] = useState("");
  
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="flex min-h-screen flex-col gap-4 bg-violet-700 items-center justify-center p-24">
      <div className="bg-violet-950 rounded-lg p-8 flex flex-col gap-6">
        <h1>{dataAtualFormatada}</h1>

        <Input
        className="placeholder:text-end"
          value={textoBusca}
          setValue={setTextoBusca}
          placeholder="Procurar tarefa"
          icon={<FaMagnifyingGlass />}
        />

        <div className="flex flex-col gap-4">
          {items.map((item: CardProps) => (
            <ToDoCard setItems={setItems} items={items} title={item.title} />
          ))}
        </div>
      </div>
      <Button text="Nova tarefa" onClick={() => setOpenModal(true)}/>
      <Modal open={openModal} setOpen={setOpenModal} items={items}/>
    </main>
  );
}

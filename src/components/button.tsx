export default function Button({ text, onClick }: { text: string; onClick?: () => void }) {
  return <button className="border rounded-md py-2 px-8" onClick={onClick}>{text}</button>;
}

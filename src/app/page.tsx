"use client";
import Image from "next/image";
import { Collapse, CollapseProps } from "antd";
import { useUserStore } from "@/store/user";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>
  }
];

export default function Home() {
  const userName = useUserStore(state => state.user.name);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">{userName}</div>
    </main>
  );
}

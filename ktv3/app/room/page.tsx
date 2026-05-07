'use client';
import { animate } from "animejs";
import Input from "../components/searchbar";

export default function RoomPage() {
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-3xl font-bold mt-8 m-4">Room</h1>
      <form action="" className="space-y-5 m-4">
          <Input></Input>
      </form>
    </div>
  );
}

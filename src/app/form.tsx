"use client"

import { useFormState, useFormStatus } from "react-dom";
import { updateTweetAction } from "./actions";
import { useRef } from "react";

export default function Form() {
    const formRef = useRef<HTMLFormElement>(null); 
  const [state, action] = useFormState(updateTweetAction, {userId: "1", name: "", message: "success"});
  if (state.message === "success") {
    formRef.current?.reset();
  }
  return (
   <form action = {action}>
     <input
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        placeholder="Paste tweet url here"
      />
    <SubmitButton />
   </form>
  );
}

export function SubmitButton() {
    const status = useFormStatus();
  return (
    <button className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg border-3.8 border-black shadow-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 text-outline-black">{status.pending? "Generating.." : "Generate"}</button>
  );
}
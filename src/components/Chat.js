"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

let socket;

export default function Chat({ params }) {
  const router = useRouter();
  const { room } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const t = useTranslations("common");

  useEffect(() => {
    socket = io();
    socket.emit("joinRoom", room);

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.disconnect();
  }, [room]);

  const sendMessage = () => {
    const messageData = { room, message: input };
    socket.emit("message", messageData);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">{t("room")}: {room}</h2>
      <div className="w-full max-w-2xl p-4 bg-gray-800 rounded shadow-lg">
        <MessageList messages={messages} />
        <MessageInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          t={t}
        />
      </div>
    </div>
  );
}

function MessageList({ messages }) {
  return (
    <div className="h-64 overflow-y-scroll mb-4 p-2 border rounded bg-gray-700">
      {messages.map((msg, index) => (
        <p key={index} className="py-1 px-2 bg-gray-600 rounded mb-1">
          {msg}
        </p>
      ))}
    </div>
  );
}

function MessageInput({ input, setInput, sendMessage, t }) {
  return (
    <div className="flex">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("type_message")}
        className="flex-grow px-4 py-2 rounded-l bg-gray-800 text-white focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r"
      >
        {t("send_message")}
      </button>
    </div>
  );
}

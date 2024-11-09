"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";


export default function HomeClient() {
  const [room, setRoom] = useState("");
  const router = useRouter();
  const t = useTranslations("common");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  function handleJoinRoom() {
    if (room.trim()) {
      router.push(`/${locale}/chat/${room}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-6">{t("welcome")}</h1>
    <p className="text-lg mb-4">{t("enter_room")}</p>
    <div className="flex space-x-3">
      <input
        type="text"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder={t("room")}
        className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
      />
      <button
        onClick={handleJoinRoom}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
      >
        {t("join_room")}
      </button>
    </div>
  </div>
  )
}
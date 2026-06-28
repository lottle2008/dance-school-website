"use client";

import { MessageCircle, Calendar } from "lucide-react";

export default function ContactFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="#booking"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white shadow-lg transition hover:scale-105 hover:bg-pink-700"
        aria-label="预约试听"
      >
        <Calendar className="h-5 w-5" />
      </a>
      <a
        href="https://work.weixin.qq.com/ca/cawcde855173cbe864"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
        aria-label="咨询教务"
        title="点击后请替换为真实企微渠道码链接"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}

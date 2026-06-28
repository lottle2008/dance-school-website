import Link from "next/link";
import { SCHOOL_INFO } from "@/lib/data";
import { Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-1.5 text-sm font-medium text-pink-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              两个校区 · 专业师资 · 试听
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {SCHOOL_INFO.slogan}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {SCHOOL_INFO.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-pink-700"
              >
                立即预约试听
                <ChevronRight className="h-5 w-5" />
              </a>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                了解课程体系
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">10+</span>
                <span>年教学经验</span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">2</span>
                <span>个校区</span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">2000+</span>
                <span>学员家庭</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-tr from-pink-200 to-purple-200 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/80 text-5xl shadow-lg">
                    💃
                  </div>
                  <p className="text-lg font-semibold text-pink-800">舞蹈课堂实景</p>
                  <p className="text-sm text-pink-700">请替换为真实校区照片</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-sm font-semibold text-slate-900">本周试听名额</p>
              <p className="text-2xl font-bold text-pink-600">剩余 12 位</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

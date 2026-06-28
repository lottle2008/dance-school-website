import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { COURSES } from "@/lib/data";

const courseEmojis: Record<string, string> = {
  "中国舞": "🎋",
  "现代舞": "💃",
  "舞蹈美育": "🩰",
  "舞蹈启蒙": "🌟",
};

export default function CoursesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">精品舞蹈课程</h2>
          <p className="mt-4 text-lg text-slate-600">覆盖 3-12 岁全年龄段，满足不同孩子的舞蹈梦想</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{courseEmojis[course.name] || "🎵"}</div>
              <h3 className="text-lg font-bold text-slate-900">{course.name}</h3>
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-pink-600">
                <Users className="h-3.5 w-3.5" />
                适合 {course.age}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{course.desc}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-500">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-pink-600 shadow-sm ring-1 ring-inset ring-pink-200 transition hover:bg-pink-50"
          >
            查看全部课程 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

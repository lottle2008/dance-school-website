import { COURSES, CAMPUSES, SCHOOL_INFO } from "@/lib/data";
import { Users, Calendar, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const courseEmojis: Record<string, string> = {
  "中国舞": "🎋",
  "拉丁舞": "💃",
  "芭蕾舞": "🩰",
  "舞蹈启蒙": "🌟",
};

export const metadata = {
  title: "课程体系 - 蔷薇花开舞蹈学校",
  description: "蔷薇花开舞蹈学校开设中国舞、拉丁舞、芭蕾舞、舞蹈启蒙等精品课程，适合3-12岁少儿。",
};

export default function CoursesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">精品舞蹈课程</h1>
          <p className="mt-4 text-lg text-slate-600">科学分龄教学，让孩子在快乐中感受舞蹈之美</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-5xl">{courseEmojis[course.name] || "🎵"}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{course.name}</h2>
                    <div className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-pink-600">
                      <Users className="h-4 w-4" />
                      适合 {course.age}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{course.desc}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {course.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <Award className="h-4 w-4 text-pink-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="h-4 w-4" />
                    每周 1-2 次课
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-700"
                  >
                    预约试听 <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">想了解课程详情？</h2>
          <p className="mt-2 text-slate-600">拨打 {SCHOOL_INFO.phone} 或直接预约试听</p>
          <a
            href="#booking"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-pink-700"
          >
            预约试听
          </a>
        </div>
      </section>
    </div>
  );
}

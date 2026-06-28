import { CAMPUSES, SCHOOL_INFO } from "@/lib/data";
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "校区环境 - 蔷薇花开舞蹈学校",
  description: "蔷薇花开舞蹈学校在秦皇岛设有两个校区，交通便利，教学环境专业，欢迎预约参观。",
};

export default function CampusesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">两个校区，就近选择</h1>
          <p className="mt-4 text-lg text-slate-600">专业舞蹈教室，家长休息区，Wi-Fi，停车便利</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {CAMPUSES.map((campus) => (
              <div
                key={campus.id}
                id={campus.id}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              >
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-7xl">🏫</span>
                    <p className="mt-2 text-sm text-pink-700">请替换为{campus.name}实景照片</p>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900">{campus.name}</h2>
                  <ul className="mt-6 space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />
                      {campus.address}
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-pink-500" />
                      {campus.phone}
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-pink-500" />
                      {campus.hours}
                    </li>
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">校区特色</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {campus.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-slate-900">开设课程</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {campus.courses.map((course) => (
                        <span
                          key={course}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#booking"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
                  >
                    预约{campus.name}试听
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">欢迎实地参观</h2>
          <p className="mt-2 text-slate-600">
            提前拨打 {SCHOOL_INFO.phone} 预约，教务老师将为您安排校区参观和课程咨询。
          </p>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { CAMPUSES } from "@/lib/data";

export default function CampusSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">两个校区，就近入学</h2>
          <p className="mt-4 text-lg text-slate-600">选择离家更近的校区，开启孩子的舞蹈之旅</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {CAMPUSES.map((campus) => (
            <div
              key={campus.id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">🏫</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{campus.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" />
                    {campus.address}
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-pink-500" />
                    {campus.phone}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-pink-500" />
                    {campus.hours}
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {campus.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/campuses#${campus.id}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-pink-600 hover:text-pink-700"
                >
                  查看详情 <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

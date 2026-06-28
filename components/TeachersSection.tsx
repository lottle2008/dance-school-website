import { TEACHERS } from "@/lib/data";

export default function TeachersSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">专业师资团队</h2>
          <p className="mt-4 text-lg text-slate-600">根据孩子年龄、基础与学习目标分级授课，启蒙培趣、中级夯实、高阶精进、专业培优，用心陪伴每一位小学员稳步成长，学有所获。</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-3xl">
                👩‍🏫
              </div>
              <h3 className="text-lg font-bold text-slate-900">{teacher.name}</h3>
              <p className="text-sm font-medium text-pink-600">{teacher.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{teacher.intro}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {teacher.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

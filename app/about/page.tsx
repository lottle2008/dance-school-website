import { TEACHERS, SCHOOL_INFO } from "@/lib/data";
import { Heart, Target, Sparkles, Users } from "lucide-react";

export const metadata = {
  title: "关于我们 - 蔷薇花开舞蹈学校",
  description: "了解蔷薇花开舞蹈学校的教学理念、师资团队和办学特色。",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">关于{SCHOOL_INFO.name}</h1>
          <p className="mt-4 text-lg text-slate-600">专注少儿舞蹈教育，让艺术成为孩子成长的礼物</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">我们的故事</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                蔷薇花开舞蹈学校成立于 2016 年，深耕少儿舞蹈教育近十年。我们相信，舞蹈不仅是技艺的训练，
                更是自信心、审美力和意志力的培养。从第一家校区到如今的两家校区，我们已陪伴超过 2000 个家庭，
                见证了无数孩子从害羞胆怯到自信登台。
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                我们的课程体系覆盖 3-12 岁，采用北京舞蹈学院考级体系，结合儿童心理发展特点，
                让每一节课都既专业又有趣。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-pink-50 p-6 text-center">
                <Users className="mx-auto h-8 w-8 text-pink-600" />
                <p className="mt-2 text-3xl font-bold text-slate-900">2000+</p>
                <p className="text-sm text-slate-600">服务学员家庭</p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-6 text-center">
                <Sparkles className="mx-auto h-8 w-8 text-purple-600" />
                <p className="mt-2 text-3xl font-bold text-slate-900">10+</p>
                <p className="text-sm text-slate-600">年办学经验</p>
              </div>
              <div className="rounded-2xl bg-orange-50 p-6 text-center">
                <Target className="mx-auto h-8 w-8 text-orange-600" />
                <p className="mt-2 text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-600">考级通过率</p>
              </div>
              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <Heart className="mx-auto h-8 w-8 text-green-600" />
                <p className="mt-2 text-3xl font-bold text-slate-900">2</p>
                <p className="text-sm text-slate-600">个校区</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">教学理念</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "兴趣为先",
                desc: "用游戏化、故事化的方式启蒙，让孩子先爱上舞蹈，再谈专业训练。",
              },
              {
                title: "科学分龄",
                desc: "根据 3-12 岁不同年龄段的身体发育特点，设计阶梯式课程内容。",
              },
              {
                title: "舞台成长",
                desc: "定期汇报演出和比赛机会，让孩子在舞台上收获自信与成就感。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">师资团队</h2>
            <p className="mt-4 text-slate-600">持证上岗，经验丰富，用爱陪伴成长</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.id}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-3xl">
                  👩‍🏫
                </div>
                <h3 className="text-lg font-bold text-slate-900">{teacher.name}</h3>
                <p className="text-sm font-medium text-pink-600">{teacher.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{teacher.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { SCHOOL_INFO } from "@/lib/data";

export const metadata = {
  title: "隐私政策 - 蔷薇花开舞蹈学校",
  description: "蔷薇花开舞蹈学校隐私政策，说明我们如何收集、使用和保护您的个人信息。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">隐私政策</h1>
        <p className="mt-4 text-sm text-slate-500">最后更新日期：2026 年 6 月 24 日</p>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-lg font-bold text-slate-900">1. 我们收集的信息</h2>
            <p className="mt-2 leading-relaxed">
              当您通过官网预约试听、咨询课程或报名活动时，我们可能会收集以下信息：家长姓名、联系电话、孩子姓名、孩子年龄、意向校区、意向课程以及备注信息。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">2. 信息的使用</h2>
            <p className="mt-2 leading-relaxed">我们使用您的信息用于：</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>安排试听课程</li>
              <li>与您沟通课程详情和校区安排</li>
              <li>提供后续教学服务和活动通知</li>
              <li>改进我们的课程和服务质量</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">3. 信息的保护</h2>
            <p className="mt-2 leading-relaxed">
              我们采取合理的技术和管理措施保护您的个人信息，不会向第三方出售、出租或共享您的个人信息，除非获得您的明确同意或法律法规另有要求。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">4. 您的权利</h2>
            <p className="mt-2 leading-relaxed">
              您有权查询、更正或删除您的个人信息。如需行使上述权利，请联系我们：{SCHOOL_INFO.phone}。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">5. 联系我们</h2>
            <p className="mt-2 leading-relaxed">
              如您对本隐私政策有任何疑问，请拨打 {SCHOOL_INFO.phone} 与我们联系。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

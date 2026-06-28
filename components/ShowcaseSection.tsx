import Image from "next/image";
import { SHOWCASES } from "@/lib/data";
import { Trophy, Star, Calendar } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "历年汇报展演": <Calendar className="h-6 w-6 text-pink-600" />,
  "舞蹈晋级考试": <Trophy className="h-6 w-6 text-pink-600" />,
  "国家级、省级舞蹈比赛": <Star className="h-6 w-6 text-pink-600" />,
};

export default function ShowcaseSection() {
  return (
    <section className="bg-gradient-to-br from-pink-600 to-purple-700 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">学员风采与成果</h2>
          <p className="mt-4 text-lg text-pink-100">舞台是检验成长的最好方式</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SHOWCASES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white p-3 shadow-sm">
                {iconMap[item.title] || <Star className="h-6 w-6 text-pink-600" />}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pink-100">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center rounded-2xl bg-white/10 px-8 py-6 backdrop-blur">
            <p className="text-sm text-pink-100">更多精彩演出照片</p>
            <p className="mt-1 text-xs text-pink-200">关注公众号查看完整相册</p>
            <div className="mt-3 h-24 w-24 rounded-lg bg-white p-1">
              <Image
                src="/images/wechat.jpg"
                alt="公众号二维码"
                width={96}
                height={96}
                className="h-full w-full rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

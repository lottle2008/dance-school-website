import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { SCHOOL_INFO, CAMPUSES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">{SCHOOL_INFO.name}</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {SCHOOL_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              快速链接
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-400">首页</Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-pink-400">课程体系</Link>
              </li>
              <li>
                <Link href="/campuses" className="hover:text-pink-400">校区环境</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-400">关于我们</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              联系我们
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-pink-500" />
                {SCHOOL_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-pink-500" />
                {SCHOOL_INFO.email}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-pink-500" />
                周二至周日 9:00-20:00
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              校区地址
            </h4>
            <ul className="space-y-3 text-sm">
              {CAMPUSES.map((campus) => (
                <li key={campus.id} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" />
                  <span>
                    <strong className="text-white">{campus.name}：</strong>
                    {campus.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name} 版权所有</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-slate-400">隐私政策</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

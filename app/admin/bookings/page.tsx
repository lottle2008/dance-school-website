"use client";

import { useEffect, useState } from "react";
import { BookingRecord } from "@/app/api/booking/route";
import { Loader2, RefreshCw } from "lucide-react";

export default function BookingsAdminPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/booking");
      const json = await res.json();
      if (json.success) {
        setBookings(json.data);
      } else {
        setError(json.message || "获取失败");
      }
    } catch (err) {
      setError("网络错误，请刷新重试");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const courseMap: Record<string, string> = {
    "中国舞chinese-dance": "中国舞",
    "现代舞xiandai-dance": "现代舞",
    "美育ballet: "舞蹈美育",
    "启蒙early-dance": "舞蹈启蒙",
  };

  const campusMap: Record<string, string> = {
    a: "A校区",
    b: "B校区",
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">试听预约管理</h1>
          <button
            onClick={fetchBookings}
            className="inline-flex items-center gap-1.5 rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
          >
            <RefreshCw className="h-4 w-4" />
            刷新
          </button>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-pink-600" />
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <div className="rounded-2xl bg-white p-10 text-center text-slate-500 shadow-sm">
            暂无预约数据
          </div>
        )}

        {!loading && bookings.length > 0 && (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    提交时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    家长
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    电话
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    孩子
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    校区
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    课程
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                    备注
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {new Date(booking.createdAt).toLocaleString("zh-CN")}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                      {booking.parentName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {booking.phone}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {booking.childName || "-"} ({booking.childAge}岁)
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {campusMap[booking.campus] || booking.campus}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                      {courseMap[booking.course] || booking.course}
                    </td>
                    <td className="max-w-xs truncate px-6 py-4 text-sm text-slate-600">
                      {booking.note || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

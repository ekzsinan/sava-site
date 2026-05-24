"use client";

import { useState } from "react";
import Image from "next/image";

const views = [
  {
    id: "crm",
    label: "CRM Pipeline",
    description: "Gerçek zamanlı müşteri pipeline yönetimi. Fırsatları sürükle-bırak ile taşı, aşamaları özelleştir.",
    screenshot: "/crm-screenshot.png",
    isReal: true,
  },
  {
    id: "dashboard",
    label: "KPI Dashboard",
    description: "Tüm operasyon metriklerinizi tek panelde görün. Anlık güncellemeler, özelleştirilebilir widget'lar.",
    screenshot: "/crm-screenshot.png",
    isReal: true,
  },
  {
    id: "workflow",
    label: "Workflow Automation",
    description: "Sürükle-bırak iş akışı tasarımcısı ile tetikleyiciler, koşullar ve eylemler tanımlayın.",
    screenshot: "/crm-screenshot.png",
    isReal: true,
  },
  {
    id: "reports",
    label: "Raporlama",
    description: "Gelir, operasyon ve ekip performansını tek bir merkezden analiz edin.",
    screenshot: "/crm-screenshot.png",
    isReal: true,
  },
];

export default function ScreenshotShowcase() {
  const [active, setActive] = useState("crm");
  const current = views.find((v) => v.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {views.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
              active === v.id
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand-200 hover:text-brand-700"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm mb-6 max-w-2xl">{current.description}</p>

      {/* Browser Frame */}
      <div className="browser-frame group">
        <div className="browser-bar">
          <span className="browser-dot bg-red-400" />
          <span className="browser-dot bg-yellow-400" />
          <span className="browser-dot bg-green-400" />
          <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-3 max-w-xs">
            <span className="text-xs text-slate-400 select-none">app.sava.company/{current.id}</span>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={current.screenshot}
            alt={`SAVA ERP ${current.label} ekranı`}
            width={1280}
            height={720}
            className="w-full h-auto object-cover"
            priority={active === "crm"}
          />
        </div>
      </div>
    </div>
  );
}


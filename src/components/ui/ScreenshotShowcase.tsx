"use client";

import { useState } from "react";
import Image from "next/image";

const views = [
  {
    id: "dashboard",
    label: "Dashboard Düzenleyicisi",
    url: "app.sava.company/dashboard",
    description:
      "Sürükle-bırak ile KPI kartlarını, grafiklerini ve veri bileşenlerini istediğiniz gibi düzenleyin. Yazılımcıya ihtiyaç duymadan işletmenize özel kontrol ekranları oluşturun.",
    screenshot: "/dashboard-editor.png",
  },
  {
    id: "workflow",
    label: "Workflow",
    url: "app.sava.company/workflows",
    description:
      "Tekrarlayan işleri otomasyona bağlayın. Müşteri, teklif, ödeme veya görev durumlarına göre e-posta, bildirim ve görev aksiyonları otomatik çalışsın.",
    screenshot: "/workflow.png",
  },
  {
    id: "scoring",
    label: "Puanlama Motoru",
    url: "app.sava.company/scoring",
    description:
      "Müşterilerinizi davranışlarına ve süreç hareketlerine göre otomatik skorlayın. Satış ekibiniz kime öncelik vermesi gerektiğini net görsün.",
    screenshot: "/scoring-engine.png",
  },
  {
    id: "email",
    label: "E-Posta Takip",
    url: "app.sava.company/email-tracking",
    description:
      "KVKK uyumlu yapı ile müşteriye gönderilen teklif, bilgilendirme ve kampanya e-postalarının açılma durumunu takip edin. Doğru müşteriye doğru zamanda temas kurun.",
    screenshot: "/email-tracking.png",
  },
  {
    id: "webhook",
    label: "WebHook",
    url: "app.sava.company/webhooks",
    description:
      "Web sitesi formları, ödeme bildirimleri, rezervasyonlar ve siparişleri manuel işleme gerek kalmadan ERP'ye anlık aktarın.",
    screenshot: "/webhook.png",
  },
  {
    id: "smtp",
    label: "SMTP Gönderici",
    url: "app.sava.company/smtp",
    description:
      "Kurumsal e-postaları kendi alan adınızla SAVA ERP üzerinden gönderin. Workflow ve e-posta takip özellikleriyle entegre çalışır.",
    screenshot: "/smtp-sender.png",
  },
];

export default function ScreenshotShowcase() {
  const [active, setActive] = useState(views[0].id);
  const current = views.find((v) => v.id === active)!;

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8">
      {/* Tabs sidebar */}
      <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
        {views.map((v) => {
          const isActive = active === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setActive(v.id)}
              className={`flex-shrink-0 lg:flex-shrink text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 border ${
                isActive
                  ? "bg-brand-50 text-brand-700 border-brand-100"
                  : "bg-white text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isActive ? "bg-brand-600" : "bg-slate-300"
                  }`}
                />
                {v.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Preview */}
      <div>
        <div className="browser-frame">
          <div className="browser-bar">
            <span className="browser-dot bg-red-400" />
            <span className="browser-dot bg-yellow-400" />
            <span className="browser-dot bg-green-400" />
            <div className="ml-3 flex-1 bg-white rounded-md h-5 flex items-center px-3 max-w-xs border border-slate-200/60">
              <span className="text-[11px] text-slate-400 select-none truncate">
                {current.url}
              </span>
            </div>
          </div>
          <div className="bg-slate-50">
            <Image
              key={current.id}
              src={current.screenshot}
              alt={`SAVA ERP — ${current.label}`}
              width={1400}
              height={900}
              className="w-full h-auto object-cover object-top"
              priority={current.id === views[0].id}
            />
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-5 leading-relaxed max-w-2xl">
          {current.description}
        </p>
      </div>
    </div>
  );
}

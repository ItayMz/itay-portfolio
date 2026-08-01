import { Check, Copy, FileSearch, ShieldCheck } from "lucide-react";

const summaryItems = [
  { value: "3", label: "Valid", tone: "text-emerald-300" },
  { value: "0", label: "Invalid", tone: "text-amber-300" },
  { value: "3", label: "Unique", tone: "text-sky-300" },
] as const;

export function ProductMockup() {
  return (
    <div className="product-window relative z-10 overflow-hidden rounded-[22px]">
      <div className="flex h-[66px] items-center gap-2.5 border-b border-white/10 px-6">
        <span className="size-3 rounded-full bg-[#ff6258] shadow-[0_0_12px_rgb(255_98_88_/_0.24)]" />
        <span className="size-3 rounded-full bg-[#ffbd2e] shadow-[0_0_12px_rgb(255_189_46_/_0.2)]" />
        <span className="size-3 rounded-full bg-[#28c840] shadow-[0_0_12px_rgb(40_200_64_/_0.2)]" />
        <span className="ml-4 text-sm font-medium text-copy">IOC Workbench</span>
      </div>

      <div className="grid min-h-[535px] gap-5 p-5 sm:grid-cols-[0.78fr_1.22fr] sm:p-6">
        <section className="mockup-card flex min-h-[460px] flex-col rounded-2xl p-5">
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold">
            <FileSearch size={18} className="text-brand-soft" />
            Input
          </div>

          <div className="min-h-[150px] rounded-xl border border-dashed border-white/12 bg-[#0b111b]/85 p-4 font-mono text-[11px] leading-7 text-[#aeb8c8] shadow-inner sm:text-xs">
            <p>hxxps://example[.]com</p>
            <p>192.0.2.14</p>
            <p className="break-all">44d88612fea8a8f36de82e1278abb02f</p>
          </div>

          <button
            type="button"
            className="mt-5 min-h-12 rounded-xl bg-gradient-to-r from-[#176fff] to-[#2f88ff] px-4 text-xs font-bold tracking-[0.01em] text-white shadow-[0_10px_30px_rgb(34_116_255_/_0.22)]"
          >
            PROCESS IOCs
          </button>
        </section>

        <div className="space-y-5">
          <section className="mockup-card rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold">Detection Summary</span>
              <ShieldCheck size={19} className="text-emerald-400" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {summaryItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.025] bg-white/[0.035] px-2 py-4 text-center"
                >
                  <span className={`mr-1 text-sm font-semibold ${item.tone}`}>{item.value}</span>
                  <span className="text-[11px] text-copy-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mockup-card min-h-[205px] rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold">Generated Query</span>
              <Copy size={17} className="text-copy-muted" />
            </div>

            <div className="space-y-2 font-mono text-[11px] leading-5 text-[#aeb8c8] sm:text-xs">
              <p>DeviceNetworkEvents</p>
              <p>| where RemoteIP in (</p>
              <p className="pl-5 text-[#54a0ff]">&quot;192.0.2.14&quot;</p>
              <p>)</p>
            </div>
          </section>

          <div className="flex min-h-12 items-center gap-3 rounded-xl border border-emerald-400/35 bg-emerald-400/[0.06] px-4 text-xs text-emerald-300">
            <Check size={16} />
            Export ready
          </div>
        </div>
      </div>
    </div>
  );
}

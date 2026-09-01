import {
  AlertTriangle,
  ArrowRight,
  Wrench,
} from "lucide-react";

export default function AlertCard({
  type,
  equipment,
  site,
  message,
  action,
}) {

  const isMaintenance = type === "maintenance";

  return (
    <div className="flex gap-4 p-4
      border border-slate-200 rounded-lg
      hover:bg-slate-50 transition">

      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-lg
          flex items-center justify-center shrink-0
          ${
            isMaintenance
              ? "bg-red-50 text-red-600"
              : "bg-amber-50 text-amber-600"
          }`}
      >
        {isMaintenance ? (
          <Wrench size={19} />
        ) : (
          <AlertTriangle size={19} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">

        <div className="flex justify-between">

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {equipment}
            </p>

            <p className="text-xs text-slate-500 mt-1">
              {site}
            </p>
          </div>

          <span className="text-xs text-slate-400">
            Today
          </span>

        </div>

        <p className="text-sm text-slate-600 mt-3">
          {message}
        </p>

        {action && (
          <button className="flex items-center gap-1
            text-xs font-medium text-blue-600
            mt-3 hover:text-blue-800">

            {action}

            <ArrowRight size={14} />

          </button>
        )}

      </div>

    </div>
  );
}
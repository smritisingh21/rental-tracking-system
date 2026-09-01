import { Activity } from "lucide-react";

export default function UtilizationCard() {
  const utilization = 74;

  return (
    <div className="bg-white border border-slate-200
      rounded-xl p-6">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h3 className="font-semibold text-slate-900">
            Equipment Utilization
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Current fleet performance
          </p>
        </div>

        <div className="w-10 h-10 rounded-lg
          bg-blue-50 text-blue-600
          flex items-center justify-center">
          <Activity size={20} />
        </div>

      </div>

      {/* Main percentage */}
      <div className="mt-6 flex items-end gap-2">

        <span className="text-4xl font-bold text-slate-900">
          {utilization}%
        </span>

        <span className="text-sm text-emerald-600 mb-1">
          +6.2%
        </span>

      </div>

      {/* Progress */}
      <div className="mt-5">

        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">

          <div
            className="h-full bg-blue-600 rounded-full"
            style={{ width: `${utilization}%` }}
          />

        </div>

      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-3 gap-4 mt-6">

        <div>
          <p className="text-xs text-slate-500">
            Normal
          </p>

          <p className="text-lg font-semibold text-slate-900 mt-1">
            68
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Underutilized
          </p>

          <p className="text-lg font-semibold text-amber-600 mt-1">
            9
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-500">
            Overutilized
          </p>

          <p className="text-lg font-semibold text-red-600 mt-1">
            4
          </p>
        </div>

      </div>

    </div>
  );
}
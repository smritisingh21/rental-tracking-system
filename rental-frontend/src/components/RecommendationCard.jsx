import {
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export default function RecommendationCard({
  equipment,
  currentSite,
  targetSite,
  score,
  reason,
}) {
  return (
    <div className="border border-slate-200
      rounded-xl p-5 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg
            bg-blue-50 text-blue-600
            flex items-center justify-center">
            <Lightbulb size={19} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Reallocation Opportunity
            </p>

            <p className="text-xs text-slate-500">
              Recommendation Engine
            </p>
          </div>

        </div>

        {/* Score */}
        <div className="text-right">

          <p className="text-lg font-bold text-emerald-600">
            {score}
          </p>

          <p className="text-[10px] uppercase
            tracking-wide text-slate-400">
            Score
          </p>

        </div>

      </div>

      {/* Equipment */}
      <div className="mt-5">

        <p className="text-sm font-medium text-slate-900">
          {equipment}
        </p>

        <div className="flex items-center gap-3 mt-3">

          <span className="px-3 py-1.5
            rounded-md bg-slate-100
            text-xs text-slate-600">
            {currentSite}
          </span>

          <ArrowRight
            size={16}
            className="text-slate-400"
          />

          <span className="px-3 py-1.5
            rounded-md bg-blue-50
            text-xs text-blue-600">
            {targetSite}
          </span>

        </div>

      </div>

      {/* Reason */}
      <div className="mt-5 p-3 rounded-lg bg-slate-50">

        <p className="text-xs text-slate-500">
          Why?
        </p>

        <p className="text-sm text-slate-700 mt-1">
          {reason}
        </p>

      </div>

      {/* Action */}
      <button className="w-full mt-4 py-2.5
        rounded-lg bg-blue-600
        text-white text-sm font-medium
        hover:bg-blue-700 transition">

        Review Recommendation

      </button>

    </div>
  );
}
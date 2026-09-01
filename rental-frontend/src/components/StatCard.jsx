
export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendPositive = true,
}) {
  return (
    <div className="bg-white border border-slate-200
      rounded-xl p-5">

      <div className="flex items-start justify-between">

        {/* Text */}
        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-2">
            {value}
          </h3>

        </div>

        {/* Icon */}
        <div className="w-11 h-11 rounded-lg
          bg-blue-50 text-blue-600
          flex items-center justify-center">

          {Icon && <Icon size={21} />}

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center gap-2">

        {trend && (
          <span
            className={`text-xs font-medium ${
              trendPositive
                ? "text-emerald-600"
                : "text-red-600"
            }`}
          >
            {trend}
          </span>
        )}

        {subtitle && (
          <span className="text-xs text-slate-400">
            {subtitle}
          </span>
        )}

      </div>

    </div>
  );
}
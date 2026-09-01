import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200
      flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900">
          Vendor Dashboard
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Monitor your rental operations and equipment performance
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2
              -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search equipment..."
            className="w-64 pl-10 pr-4 py-2.5
              bg-slate-50 border border-slate-200
              rounded-lg text-sm
              focus:outline-none focus:ring-2
              focus:ring-blue-500"
          />

        </div>

        {/* Notifications */}
        <button className="relative text-slate-500 hover:text-slate-900">

          <Bell size={21} />

          <span className="absolute -top-1 -right-1
            w-4 h-4 rounded-full bg-red-500
            text-white text-[10px]
            flex items-center justify-center">
            4
          </span>

        </button>

        {/* Profile */}
        <button className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full bg-blue-100
            text-blue-700 flex items-center justify-center
            font-semibold">
            VA
          </div>

          <ChevronDown
            size={17}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}
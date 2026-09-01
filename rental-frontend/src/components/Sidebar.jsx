import {
  LayoutDashboard,
  Package,
  ClipboardList,
  MapPin,
  Lightbulb,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Equipment",
    icon: Package,
  },
  {
    label: "Rentals",
    icon: ClipboardList,
  },
  {
    label: "Sites",
    icon: MapPin,
  },
  {
    label: "Recommendations",
    icon: Lightbulb,
  },
  {
    label: "Alerts",
    icon: Bell,
    badge: 4,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-xl font-bold">
          Rental<span className="text-blue-500">IQ</span>
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Smart Rental Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="text-xs uppercase tracking-wider text-slate-500 px-3 mb-3">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-lg
                  text-sm transition
                  ${
                    item.active
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }
                `}
              >
                <Icon size={19} />

                <span className="flex-1 text-left">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="bg-red-500 text-white text-xs
                    w-5 h-5 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Settings */}
        <div className="mt-8 pt-6 border-t border-slate-800">

          <button className="w-full flex items-center gap-3 px-3 py-3
            rounded-lg text-sm text-slate-400
            hover:bg-slate-900 hover:text-white transition">
            <Settings size={19} />
            Settings
          </button>

        </div>
      </nav>

      {/* Vendor Profile */}
      <div className="p-4 border-t border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600
            flex items-center justify-center font-semibold">
            V
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              Vendor Admin
            </p>

            <p className="text-xs text-slate-500 truncate">
              vendor@example.com
            </p>
          </div>

          <button className="text-slate-500 hover:text-white">
            <LogOut size={18} />
          </button>

        </div>

      </div>

    </aside>
  );
}
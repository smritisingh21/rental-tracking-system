import {Package,Activity,ClipboardList,AlertTriangle,} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import UtilizationCard from "./components/UtilizationCard";
import AlertCard from "./components/AlertCard";
import RecommendationCard from "./components/RecommendationCard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          {/* Stats */}
          <section className="grid grid-cols-4 gap-5">

            <StatCard
              title="Total Equipment"
              value="81"
              subtitle="vs last month"
              trend="+8.4%"
              icon={Package}
            />

            <StatCard
              title="Avg. Utilization"
              value="74%"
              subtitle="vs last month"
              trend="+6.2%"
              icon={Activity}
            />

            <StatCard
              title="Active Rentals"
              value="46"
              subtitle="currently rented"
              trend="+3"
              icon={ClipboardList}
            />

            <StatCard
              title="Needs Attention"
              value="13"
              subtitle="equipment"
              trend="Requires review"
              trendPositive={false}
              icon={AlertTriangle}
            />

          </section>

          {/* Analytics */}
          <section className="grid grid-cols-3 gap-5 mt-6">

            <div className="col-span-2">
              <UtilizationCard />
            </div>

            {/* Alerts */}
            <div className="bg-white border border-slate-200
              rounded-xl p-6">

              <div className="flex items-center justify-between mb-5">

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Recent Alerts
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Requires your attention
                  </p>
                </div>

                <button className="text-xs text-blue-600
                  font-medium">
                  View all
                </button>

              </div>

              <div className="space-y-3">

                <AlertCard
                  equipment="EQX1004"
                  site="Site S004"
                  message="Equipment utilization is only 18%."
                  action="Review underutilization"
                />

                <AlertCard
                  type="maintenance"
                  equipment="EQX1007"
                  site="Site S002"
                  message="Preventive maintenance is required."
                  action="View maintenance"
                />

              </div>

            </div>

          </section>

          {/* Recommendations */}
          <section className="mt-6">

            <div className="flex items-center justify-between mb-4">

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Smart Recommendations
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  AI-assisted actions based on equipment usage and demand
                </p>
              </div>

              <button className="text-sm text-blue-600 font-medium">
                View all recommendations
              </button>

            </div>

            <div className="grid grid-cols-3 gap-5">

              <RecommendationCard
                equipment="EQX1004 — Excavator"
                currentSite="S004"
                targetSite="S003"
                score="91"
                reason="18% utilization at S004 while S003 has a predicted shortage of 4 excavators."
              />

              <RecommendationCard
                equipment="EQX1012 — Crane"
                currentSite="S001"
                targetSite="S005"
                score="84"
                reason="Demand forecast indicates increasing crane requirements at S005."
              />

              <RecommendationCard
                equipment="EQX1021 — Bulldozer"
                currentSite="S002"
                targetSite="S003"
                score="78"
                reason="Equipment is underutilized and predicted demand is higher at S003."
              />

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}
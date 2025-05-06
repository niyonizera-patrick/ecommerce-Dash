// src/app/dashboard/page.tsx
import ChartBar from "../../recharts/chartbar";
import { Card , CardContent } from "../../ui/card"; // Make this component reusable
import { UserAvatar } from "../../ui/user-avatar"; // A bar chart component you’ll build

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-2xl font-semibold text-white">Overview</div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Customers</p>
            <h2 className="text-3xl font-bold">1,293</h2>
            <p className="text-red-500 text-sm">↓ 36.8% vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Balance</p>
            <h2 className="text-3xl font-bold">256k</h2>
            <p className="text-green-500 text-sm">↑ 36.8% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* New Customers */}
      <div className="space-y-2">
        <h3 className="font-semibold">857 new customers today!</h3>
        <div className="flex gap-4">
          {["Gladyce", "Elbert", "Joyce", "John", "Anna"].map((name, i) => (
            <div key={i} className="flex flex-col items-center">
              <UserAvatar name={name} />
              <span className="text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-muted rounded-xl p-4">
        <h3 className="font-semibold mb-2">Product view</h3>
        <ChartBar />
      </div>
    </div>
  );
}

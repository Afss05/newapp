import "../../globals.css";

export default function Dashboard() {
  const stats = [
    { title: "Total Vendors", value: "124" },
    { title: "Orders Today", value: "128" },
    { title: "Revenue Today", value: "₹54,300" },
    { title: "Low Stock Items", value: "17" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome back 👋 <span className="text-green-600">Have a fresh day!</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border-l-4 border-green-500 rounded-xl shadow p-6 hover:shadow-xl transition"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,245" },
    { title: "Orders Today", value: "128" },
    { title: "Revenue", value: "₹54,300" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <p className="text-gray-500 text-sm">{item.title}</p>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

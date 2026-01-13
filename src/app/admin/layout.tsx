import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-3 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

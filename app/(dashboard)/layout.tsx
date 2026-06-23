import { AppSidebar } from "@/components/layouts/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="w-full px">
        <SidebarTrigger />

        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}

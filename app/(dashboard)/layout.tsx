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

      <div className="flex-1">
        <SidebarTrigger />

        <div className="p-4">{children}</div>
      </div>
    </SidebarProvider>
  );
}

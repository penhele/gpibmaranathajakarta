import { AppSidebar } from "@/components/layouts/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <SidebarProvider>
    <AppSidebar />

    <main className="w-full">
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>;
}

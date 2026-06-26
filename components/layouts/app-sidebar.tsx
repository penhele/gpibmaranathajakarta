"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/constants/routes";
import { Landmark, LayoutDashboard, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export function AppSidebar() {
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", Icon: LayoutDashboard, href: ROUTES.DASHBOARD },
    { label: "Dashboard", Icon: Users, href: ROUTES.DASHBOARD_CONGREGATION },
    { label: "Pelkat", Icon: Landmark, href: ROUTES.DASHBOARD_PELKAT },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton onClick={() => router.push(item.href)}>
                    <item.Icon />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

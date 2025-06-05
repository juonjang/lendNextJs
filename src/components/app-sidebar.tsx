"use client"

import * as React from "react"
import {
  IconCamera,
  IconDashboard,

  IconFileAi,
  IconFileDescription,

  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconTicket,
  IconHeartRateMonitor,
  IconAlertCircle,
} from "@tabler/icons-react"
import { BsPersonRolodex } from "react-icons/bs"
import { FaComputer } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { NavAnalytics } from "@/components/nav-anlytisc"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



const data = {
  user: {
    name: "JuOn",
    email: "JuOn@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Ticket Queue",
      url: "#",
      icon: IconTicket,
    },
    {
      title: "Live Monitor",
      url: "#",
      icon: IconHeartRateMonitor ,
    },
    {
      title: "แจ้งเตือน",
      url: "#",
      icon: IconAlertCircle,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      title: "อุปกรณ์ IT",
      name: "อุปกรณ์ IT",
      url: "#",
      icon: FaComputer,
    },
    {
      title: "ซอฟต์แวร์ และ โปรแกรม",
      name: "ซอฟต์แวร์ และ โปรแกรม",
      url: "#",
      icon: IconReport,
    },
    { title: "vander",
      name: "vander",
      url: "#",
      icon: BsPersonRolodex,
    },
    { title: "ข้อมูล Server",
      name: "ข้อมูล Server",
      url: "#",
      icon: GiServerRack,
    },
  ],
  analytics: [
    { title: "ประสิทธิภาพการทำงาน",
      name: "ประสิทธิภาพการทำงาน",
      url: "#",
      icon: FaComputer,
    },
    { title: "ติดตาม SLA",
      name: "ติดตาม SLA",
      url: "#",
      icon: IconReport,
    },
    { title: "รายงาน",
      name: "รายงาน",
      url: "#",
      icon: BsPersonRolodex,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">IT Manager</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents}   />
        <NavAnalytics items={data.analytics}  />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
       
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

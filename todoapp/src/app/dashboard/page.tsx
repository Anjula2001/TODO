import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { CalendarDemo } from "@/components/ui/CalendarDemo"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          {/* Add your dashboard content here */}
          <CalendarDemo />
        </div>
      </main>
    </SidebarProvider>
  )
}
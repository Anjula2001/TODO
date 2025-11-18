"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  PlusCircle, 
  Calendar, 
  CalendarDays, 
  CheckCircle, 
  User, 
  ChevronDown 
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">
      
    
      <aside className="w-64 bg-[#1ABC9C] text-slate-900 flex flex-col p-6 rounded-tr-[40px] relative shadow-xl z-10">
        
        <div className="flex items-center gap-3 mb-12 bg-[#16a085]/20 p-2 rounded-lg cursor-pointer hover:bg-[#16a085]/30 transition-colors w-fit">
          <Avatar className="h-8 w-8 border border-white/20">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-white text-[#1ABC9C]"><User size={16}/></AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm">User Name</span>
          <ChevronDown size={16} className="text-slate-800" />
        </div>

        <nav className="space-y-6 flex-1">
          <div className="flex items-center gap-3 font-semibold cursor-pointer hover:opacity-80">
            <PlusCircle size={20} />
            <span>Add task</span>
          </div>
          <div className="flex items-center gap-3 font-semibold cursor-pointer hover:opacity-80">
            <Calendar size={20} />
            <span>Upcoming</span>
          </div>
          <div className="flex items-center gap-3 font-semibold cursor-pointer hover:opacity-80">
            <CalendarDays size={20} />
            <span>Today</span>
          </div>
          <div className="flex items-center gap-3 font-semibold cursor-pointer hover:opacity-80">
            <CheckCircle size={20} />
            <span>Completed</span>
          </div>
        </nav>

        <div className="mt-auto">
          <a href="#" className="text-sm underline opacity-70 hover:opacity-100">Need help?</a>
        </div>
      </aside>

      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          
          <h1 className="text-3xl font-bold text-[#1e293b] mb-10">Profile Settings</h1>

          <Tabs defaultValue="account" className="w-full">
            
            <TabsList className="bg-transparent p-0 gap-4 h-auto flex justify-start mb-10 w-full">
              <TabsTrigger 
                value="account" 
                className="w-40 py-2.5 rounded-xl text-base shadow-sm border border-slate-100
                data-[state=active]:bg-[#9EE2CE] data-[state=active]:text-slate-800 data-[state=active]:shadow-md
                data-[state=inactive]:bg-white data-[state=inactive]:text-slate-600"
              >
                Account
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="w-40 py-2.5 rounded-xl text-base shadow-sm border border-slate-100
                data-[state=active]:bg-[#9EE2CE] data-[state=active]:text-slate-800 data-[state=active]:shadow-md
                data-[state=inactive]:bg-white data-[state=inactive]:text-slate-600"
              >
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="space-y-8 mt-0">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-600 font-medium">Name</Label>
                <Input 
                  id="name" 
                  placeholder="User Name" 
                  className="bg-[#C1E8D5] border-none h-12 text-slate-700 placeholder:text-slate-500 rounded-xl focus-visible:ring-[#1ABC9C]"
                />
              </div>              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-600 font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Enter your email address" 
                  className="bg-[#C1E8D5] border-none h-12 text-slate-700 placeholder:text-slate-500 rounded-xl focus-visible:ring-[#1ABC9C]"
                />
              </div>

              <div className="pt-4">
                <Button className="bg-[#10b981] hover:bg-[#059669] text-white w-40 h-11 rounded-xl text-md shadow-lg shadow-emerald-100">
                  Update
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-8 mt-0">              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-slate-600 font-medium">Current Password</Label>
                <Input 
                  id="current-password" 
                  type="password"
                  placeholder="Enter current password" 
                  className="bg-[#C1E8D5] border-none h-12 text-slate-700 placeholder:text-slate-500 rounded-xl focus-visible:ring-[#1ABC9C]"
                />
              </div>              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-slate-600 font-medium">New Password</Label>
                <Input 
                  id="new-password" 
                  type="password"
                  placeholder="Enter new password" 
                  className="bg-[#C1E8D5] border-none h-12 text-slate-700 placeholder:text-slate-500 rounded-xl focus-visible:ring-[#1ABC9C]"
                />
              </div>              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-slate-600 font-medium">Confirm New Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password"
                  placeholder="Confirm new password" 
                  className="bg-[#C1E8D5] border-none h-12 text-slate-700 placeholder:text-slate-500 rounded-xl focus-visible:ring-[#1ABC9C]"
                />
              </div>

              <div className="pt-4">
                <Button className="bg-[#10b981] hover:bg-[#059669] text-white w-40 h-11 rounded-xl text-md shadow-lg shadow-emerald-100">
                  Save
                </Button>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </main>
    </div>
  )
}
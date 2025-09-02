import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Footer } from "@/components/layout/Footer";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Papers from "./pages/Papers";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex min-h-[calc(100vh-4rem)] w-full">
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 pb-24 lg:pb-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
          <Footer />
        </main>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

'use client';

import { SidebarItem } from './sidebarItem';
import ThemeToggle from './toggleTheme';
import {
  LayoutDashboard,
  Box,
  User,
  ShoppingBag,
  Mail,
  Settings,
} from 'lucide-react';

type SidebarProps = {
  currentPage: string;
  setCurrentPage: (label: string) => void;
};

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen flex flex-col justify-between bg-black text-white p-6">
      <div className="space-y-2">
        <SidebarItem
          icon={<LayoutDashboard />}
          label="Dashboard"
          currentPage={currentPage}
          onClick={setCurrentPage}
        />
        <SidebarItem
          icon={<Box />}
          label="Products"
          currentPage={currentPage}
          onClick={setCurrentPage}
          subItems={[
            { label: 'Overview' },
            { label: 'Drafts', badge: 2 },
            { label: 'Released' },
            { label: 'Comments' },
            { label: 'Scheduled', badge: 8 },
          ]}
        />
        <SidebarItem
          icon={<User />}
          label="Customers"
          currentPage={currentPage}
          onClick={setCurrentPage}
          subItems={[
            { label: 'Overview' },
            { label: 'Customer list' },
          ]}
        />
        <SidebarItem
          icon={<ShoppingBag />}
          label="Shop"
          currentPage={currentPage}
          onClick={setCurrentPage}
        />
        <SidebarItem
          icon={<Mail />}
          label="Income"
          currentPage={currentPage}
          onClick={setCurrentPage}
          subItems={[
            { label: 'Earning' },
            { label: 'Refunds', badge: 3 },
            { label: 'Payouts' },
            { label: 'Statements' },
          ]}
        />
        <SidebarItem
          icon={<Settings />}
          label="Promote"
          currentPage={currentPage}
          onClick={setCurrentPage}
        />
      </div>

      <ThemeToggle />
    </aside>
  );
}

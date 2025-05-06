'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type SubItem = {
  label: string;
  badge?: number;
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  subItems?: SubItem[];
  currentPage: string;
  onClick: (label: string) => void;
}

export const SidebarItem = ({
  icon,
  label,
  subItems = [],
  currentPage,
  onClick,
}: SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  const hasSub = subItems.length > 0;

  const isActive = currentPage === label;

  return (
    <div>
      {/* Main item */}
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all ${
          isActive ? 'bg-white text-black font-semibold' : 'hover:bg-zinc-800'
        }`}
        onClick={() => {
          onClick(label);
          if (hasSub) setOpen(!open);
        }}
      >
        <div className="flex items-center space-x-3">
          <span>{icon}</span>
          <span>{label}</span>
        </div>

        {hasSub && (
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        )}
      </div>

      {/* Sub items */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="pl-6 overflow-hidden"
          >
            {subItems.map((item, i) => {
              const isSubActive = currentPage === item.label;
              return (
                <div
                  key={i}
                  onClick={() => onClick(item.label)}
                  className={`flex justify-between items-center py-1 px-2 rounded-md text-sm cursor-pointer transition-all ${
                    isSubActive ? 'bg-white text-black font-semibold' : 'hover:bg-zinc-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-rose-400 text-white px-2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

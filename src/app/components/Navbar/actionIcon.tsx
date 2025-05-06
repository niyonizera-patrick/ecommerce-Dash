import { Bell, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const MotionIcon = motion.div;

const ActionIcons = () => (
  <div className="flex items-center gap-4">
    {[Bell, MessageCircle].map((Icon, idx) => (
      <MotionIcon
        key={idx}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer text-zinc-400 hover:text-white"
      >
        <Icon className="w-5 h-5" />
      </MotionIcon>
    ))}
  </div>
);

export default ActionIcons;

// src/components/ui/user-avatar.tsx
import React from "react"

type UserAvatarProps = {
  name: string
  imageUrl?: string // Optional: fallback to initials if no image
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, imageUrl }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-medium">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        initials
      )}
    </div>
  )
}

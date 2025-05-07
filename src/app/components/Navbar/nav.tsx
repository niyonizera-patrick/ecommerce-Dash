"use client";
import { FC, useState } from "react";
import Logo from "./logo";
import SearchBar from "./searchbar";
import ActionIcons from "./actionIcon";
import ProfileAvatar from "./profileAvator";
import CreateProductModal from "@/app/Model/productModel"; // 👈 you'll create this next

const Navbar: FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 bg-black text-white gap-3 sm:gap-0 shadow-md">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </div>

        <SearchBar />

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition "
          >
            Create
          </button>
          <ActionIcons />
          <ProfileAvatar />
        </div>
      </nav>

      {/*  Pop-up modal for product creation */}
      <CreateProductModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;

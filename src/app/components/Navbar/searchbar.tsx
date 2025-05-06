import { Search } from "lucide-react";

const SearchBar = () => (
  <div className="relative w-full md:w-[300px] hidden sm:block">
    <input
      type="text"
      placeholder="Search anything..."
      className="w-full pl-10 pr-4 py-2 rounded-full bg-zinc-900 text-sm text-white placeholder:text-zinc-400 focus:outline-none"
    />
    <Search className="absolute top-2.5 left-3 w-4 h-4 text-zinc-400" />
  </div>
);
export default SearchBar;

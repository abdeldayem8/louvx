"use client"

import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Static search results for demo purposes
const staticResults = [
  { id: 1, title: "Men's Collection", category: "Category" },
  { id: 2, title: "Women's Dresses", category: "Category" },
  { id: 3, title: "Summer T-Shirts", category: "Category" },
  { id: 4, title: "Casual Shoes", category: "Category" },
  { id: 5, title: "Accessories", category: "Category" },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredResults = query
    ? staticResults.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const clearSearch = () => {
    setQuery("");
    setIsFocused(false);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" 
          size={18} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search for products..."
          className="w-full pl-10 pr-10 py-2 lg:py-2.5 rounded-lg bg-background text-foreground border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-sm"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isFocused && query && (
        <div className="absolute z-[100] w-full mt-2 bg-background rounded-lg shadow-xl border border-border overflow-hidden max-h-[400px] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <ul className="py-1">
              {filteredResults.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="w-full text-left block px-4 py-3 hover:bg-accent transition-colors"
                    onClick={() => {
                      setQuery(item.title);
                      setIsFocused(false);
                    }}
                  >
                    <div className="font-medium text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.category}</div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-muted-foreground text-sm">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

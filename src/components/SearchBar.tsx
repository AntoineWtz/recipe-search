import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for recipes..."
                className="p-2 border border-gray-300 rounded-md w-full"
            />
            <button
                onClick={handleSearch}
                className="mt-2 p-2 bg-blue-500 text-white rounded-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;

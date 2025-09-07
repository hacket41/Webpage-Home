import React, { useState } from "react";

const SearchBar: React.FC = () => {
    const [postCode, setPostCode] = useState("");
    return (
        <div className="px-4 py-6 bg-white">
            <div className="max-w-2xl mx-auto flex gap-2">
                <input
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    placeholder="e.g. EC4R 3TE"
                    className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semi-bold">
                    Search
                </button>
            </div>
        </div>
    );
};
export default SearchBar;

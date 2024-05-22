import React from 'react';

interface CuisineFilterProps {
    setCuisineType: (cuisineType: string) => void;
}

const CuisineFilter: React.FC<CuisineFilterProps> = ({ setCuisineType }) => {
    const handleCuisineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCuisineType(event.target.value);
    };

    return (
        <div className="mb-8 text-center">
            <select
                onChange={handleCuisineChange}
                className="p-2 border border-gray-300 rounded-md"
            >
                <option value="">All Cuisines</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="British">British</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Central Europe">Central Europe</option>
                <option value="Chinese">Chinese</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="French">French</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kosher">Kosher</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Nordic">Nordic</option>
                <option value="South American">South American</option>
                <option value="South East Asian">South East Asian</option>
            </select>
        </div>
    );
};

export default CuisineFilter;

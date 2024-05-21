import React from 'react';

interface Recipe {
    label: string;
    image: string;
    url: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="border border-gray-300 rounded-md p-4">
            <img src={recipe.image} alt={recipe.label} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-2 text-center">{recipe.label}</h2>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800">
                View Recipe
            </a>
        </div>
    );
};

export default RecipeCard;

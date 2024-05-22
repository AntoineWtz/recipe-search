import React from 'react';

interface Recipe {
    label: string;
    image: string;
    source: string;
    url: string;
    ingredientLines: string[];
    cuisineType: string[];
}

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {recipes.map((recipe, index) => (
                <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
                    <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.label} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2 text-gray-700">{recipe.label}</div>
                        <p className="text-gray-600 text-base m-2">Source: {recipe.source}</p>
                        <p className="text-gray-600 text-base m-2 capitalize">Cuisine Type: {recipe.cuisineType.join(', ')}</p>
                        <h3 className="text-gray-700 text-center font-bold m-2">Ingredients:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {recipe.ingredientLines.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="block text-center text-blue-500 hover:text-blue-700">
                            View Recipe
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;

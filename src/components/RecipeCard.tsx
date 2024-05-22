import React from 'react';

interface RecipeCardProps {
    recipe: {
        label: string;
        image: string;
        url: string;
        ingredients: { text: string }[];
        source: string;
        cuisineType?: string[];
    };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="max-w-xs w-full rounded-lg overflow-hidden shadow-lg bg-white m-4 p-4 flex flex-col">
            <img className="w-full h-48 object-cover rounded" src={recipe.image} alt={recipe.label} />
            <div className="flex-1 p-4">
                <div className="font-bold text-xl text-center mb-2">{recipe.label}</div>
                <p className="text-gray-700 text-center mb-2">Source: {recipe.source}</p>
                {recipe.cuisineType && (
                    <p className="text-gray-500 text-center mb-4">Cuisine: {recipe.cuisineType.join(', ')}</p>
                )}
                <div className="mt-4">
                    <h2 className="font-bold text-lg text-center">Ingredients:</h2>
                    <ul className="list-disc list-inside">
                        {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Recipe
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;

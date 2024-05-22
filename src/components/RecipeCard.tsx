import React from 'react';

interface RecipeCardProps {
    recipe: {
        label: string;
        image: string;
        url: string;
        ingredients: { text: string }[];
        source: string;
    };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-2">
            <img className="w-full h-48 object-cover rounded" src={recipe.image} alt={recipe.label} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{recipe.label}</div>
                <p className="text-gray-700 text-base">Source: {recipe.source}</p>
                <div className="mt-4">
                    <h2 className="font-bold text-lg">Ingredients:</h2>
                    <ul className="list-disc list-inside">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Recipe
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;

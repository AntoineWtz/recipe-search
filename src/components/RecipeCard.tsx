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
        <div className="max-w-xs w-full rounded-lg overflow-hidden shadow-lg bg-white m-4 p-2 flex flex-col">
            <img className="w-full h-48 object-cover rounded" src={recipe.image} alt={recipe.label} />
            <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                    <div className="font-bold text-xl text-center mb-2">{recipe.label}</div>
                    <p className="text-gray-700 text-base text-left">Source: {recipe.source}</p>
                    <p className="text-gray-700 text-base text-left">Cuisine: {recipe.cuisineType ? recipe.cuisineType.join(', ') : 'Unknown'}</p>
                    <div className="mt-4">
                        <h2 className="font-bold text-lg text-center">Ingredients:</h2>
                        <ul className="list-disc list-inside text-left">
                            {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <a
                        href={recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded"
                    >
                        View Recipe
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;

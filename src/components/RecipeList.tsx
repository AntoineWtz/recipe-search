import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
    label: string;
    image: string;
    url: string;
}

interface RecipeListProps {
    recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.url} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;

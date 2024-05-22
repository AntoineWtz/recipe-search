import React from 'react';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
    recipes: {
        label: string;
        image: string;
        url: string;
        ingredients: { text: string }[];
        source: string;
    }[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;

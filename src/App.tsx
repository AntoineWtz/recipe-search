import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  const fetchRecipes = async (query: string) => {
    const appId = 'eec6bf53';
    const appKey = 'ca0c5ea482f317dfc748846fa27cd36e';
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&to=20`);
      const data = await response.json();
      console.log('API Response:', data);

      if (data.hits && Array.isArray(data.hits)) {
        setRecipes(data.hits.map((hit: any) => ({
          label: hit.recipe.label,
          image: hit.recipe.image,
          url: hit.recipe.url,
          ingredients: hit.recipe.ingredients,
          source: hit.recipe.source,
          cuisineType: hit.recipe.cuisineType
        })));
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe Search</h1>
      <p className="text-center text-gray-700 mb-4">Find recipes for your favorite dishes!</p>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;

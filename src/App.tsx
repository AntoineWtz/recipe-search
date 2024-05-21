import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  const fetchRecipes = async (query: string) => {
    const appId = 'eec6bf53';
    const appKey = 'Yb6283cf46aa623264d25addb9598206d';
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
      const data = await response.json();
      console.log('API Response:', data);

      if (data.hits && Array.isArray(data.hits)) {
        setRecipes(data.hits.map((hit: any) => hit.recipe));
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Search</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;

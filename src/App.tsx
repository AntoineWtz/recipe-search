import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import CuisineFilter from './components/CuisineFilter';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [cuisineType, setCuisineType] = useState<string>('');
  const [query, setQuery] = useState<string>('recipe');
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(10);

  const appId = 'eec6bf53';
  const appKey = 'ca0c5ea482f317dfc748846fa27cd36e';

  const fetchRecipes = async (query: string, cuisineType: string, from: number, to: number, append: boolean = false) => {
    try {
      let url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=${from}&to=${to}`;
      if (cuisineType) {
        url += `&cuisineType=${cuisineType}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data);

      if (data.hits && Array.isArray(data.hits)) {
        const newRecipes = data.hits.map((hit: any) => ({
          label: hit.recipe.label,
          image: hit.recipe.image,
          url: hit.recipe.url,
          ingredients: hit.recipe.ingredients,
          source: hit.recipe.source,
          cuisineType: hit.recipe.cuisineType
        }));
        setRecipes(prevRecipes => append ? [...prevRecipes, ...newRecipes] : newRecipes);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setFrom(0);
    setTo(10);
    fetchRecipes(query, cuisineType, 0, 10);
  };

  const loadMoreRecipes = () => {
    const newFrom = from + 10;
    const newTo = to + 10;
    setFrom(newFrom);
    setTo(newTo);
    fetchRecipes(query, cuisineType, newFrom, newTo, true);
  };

  useEffect(() => {
    fetchRecipes('recipe', '', 0, 10);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe Search</h1>
      <p className="text-center text-gray-700 mb-4">Find recipes for your favorite dishes!</p>
      <div className="flex justify-center items-center mb-8 space-x-4">
        <CuisineFilter setCuisineType={setCuisineType} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <RecipeList recipes={recipes} />
      <div className="flex justify-center mt-8">
        <button
          onClick={loadMoreRecipes}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More Recipes
        </button>
      </div>
    </div>
  );
};

export default App;

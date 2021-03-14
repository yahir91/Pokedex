const PokemonFilter = event => {
  const categoryList = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="category">
      <select name="categories" onChange={event}>
        <option value="All" selected>CATEGORIES</option>
        {categoryList.map(item => <option value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
};

export default PokemonFilter;

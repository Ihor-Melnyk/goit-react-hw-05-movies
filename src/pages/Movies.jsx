export const MoviesPage = () => {
  const handleNameChange = e => {
    console.log(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <p>Movies</p>
      <form action="" onClick={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search movies"
            onChange={handleNameChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </div>
  );
};

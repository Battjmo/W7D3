export const fetchAllPokemon = () => {
  return $.ajax( {
    method: "get",
    dataType: "json",
    url: "/api/pokemon"
  });
};

export const fetchOnePokemon = (id) => {
  return $.ajax( {
    method: "get",
    dataType: "json",
    url: `/api/pokemon/${id}`
  });
};

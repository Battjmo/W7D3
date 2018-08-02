export const fetchAllPokemon = () => {
  return $.ajax( {
    method: "get",
    dataType: "json",
    url: "/api/pokemon"
  });
};



export const fetchAllPokemon = success => {
  $.ajax({
    type: "GET",
    url: "/api/pokemon",
    success: success
  });
};

export const fetchPokemon = (success,id) => {
  $.ajax({
    type: "GET",
    url: `/api/pokemon/${id}`,
    success: success
  });
};

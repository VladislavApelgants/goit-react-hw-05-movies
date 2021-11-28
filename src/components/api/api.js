const KEY = "f6fab6ea4000c88b7ccf1769aeb3013f";

export function fetchApiSearch(query, page) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US-ru&query=${query}&page=1&include_adult=false`
  ).then((response) => {
    return response.json();
  });
}

export function fetchApiRating(page) {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  ).then((response) => {
    return response.json();
  });
}

export function fetchApiMore(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US-ru`
  ).then((resp) => {
    return resp.json();
  });
}
export function fetchApiCast(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US-ru`
  ).then((resp) => {
    return resp.json();
  });
}
export function fetchApiReviews(id, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`
  ).then((resp) => resp.json());
}

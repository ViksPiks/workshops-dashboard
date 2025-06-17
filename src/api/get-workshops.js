const WORKSHOPS_URL = "https://motointegrator.com/api/search/v4/workshop";

export async function getWorkshops(page = 1, perPage = 10) {
  const response = await fetch(
    `${WORKSHOPS_URL}?locale=en&market=PL&page=${page}&perPage=${perPage}`
  );
  const { results: workshops } = await response.json();

  return { workshops };
}

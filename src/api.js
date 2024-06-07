export async function getFoods({
  order = "",
  offset = "",
  limit = 10,
  search = "",
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}&search=${search}`;
  const res = await fetch(`https://learn.codeit.kr/api/foods?${query}`);
  const body = await res.json();
  return body;
}

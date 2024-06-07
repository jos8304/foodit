export async function getFoods({ order = "", offset = "", limit = 10 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const res = await fetch(`https://learn.codeit.kr/api/foods?${query}`);
  const body = await res.json();
  return body;
}

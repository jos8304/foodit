export async function getFoods() {
  const res = await fetch(`https://learn.codeit.kr/1111/foods`);
  const body = await res.json();
  return body;
}

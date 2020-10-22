export function saveInsured(insured) {
  return fetch(process.env.REACT_APP_API_BASE_URL + "insured", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(insured),
  });
}

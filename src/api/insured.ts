import { Insured } from "../typings/types";

export function saveInsured(insured: Insured) {
  return fetch(
    process.env.REACT_APP_API_BASE_URL + "insured/" + (insured.id ?? ""),
    {
      method: insured.id ? "PUT" : "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(insured),
    }
  );
}

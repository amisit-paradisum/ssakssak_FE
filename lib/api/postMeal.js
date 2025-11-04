import api from "./api"

export const postMeal = async (schoolCode, date) => {
  const response = await api.post("/api/meal", {
    schoolCode,
    date,
  })
  return response.data
}

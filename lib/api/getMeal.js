import api from "./api"

export const getMeal = async (schoolCode, date) => {
  const response = await api.get("/api/meal", {
    params: { schoolCode, date },
  })
  return response.data
}
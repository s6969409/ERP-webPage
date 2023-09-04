import axios from "../../api/axios";

export const apiGet = () => axios({
  url: `/varTypes`,
  method: "GET"
})
export const apiGetOne = name => axios({
  url: `/varTypes/${name}`,
  method: "GET"
})
export const apiAdd = (data) => axios({
  url: `/varTypes`,
  method: "POST",
  data
})
export const apiUpdate = (data) => axios({
  url: `/varTypes`,
  method: "PUT",
  data
})
export const apiRemove = (name) => axios({
  url: `/varTypes/${name}`,
  method: "DELETE"
})

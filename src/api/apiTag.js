import axios from "axios";

const request = axios.create({
  baseURL: "https://vue-lessons-api.vercel.app/",
});

// https://vue-lessons-api.vercel.app/nav/tags
export const apiGetTagsList = () => request.get("/nav/tags");

export const apiGetTagsProduct = (params) => {
  // console.log("params", params);
  return request.get("/nav/tags/product", {params});
}

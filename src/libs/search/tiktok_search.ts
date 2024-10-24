import TyTiktokSearch from "../../types/search/TyTiktokSearch";

async function tiktok_search(keyword: string): Promise<TyTiktokSearch> {
  const result:TyTiktokSearch = (await global.axios.get(global.main_url + "tiktoksearch?message=" + keyword)).data;
  return result;
}

export default tiktok_search;

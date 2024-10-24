import TyPinterestSearch from "../../types/search/TyPinterestSearch";
import validate_pinterest_search from "../../zod/search/validate_pinterest_search";

async function pinterest_search(keyword:string):Promise<TyPinterestSearch> {
  const result:TyPinterestSearch = (await global.axios.get(global.main_url + "pinsearch?message=" + keyword)).data;
  return validate_pinterest_search(result);
}

export default pinterest_search;

import TyAgatHeader from "../../types/partials/TyAgatHeader";

type TyPinterestSearchData = {
  id: string;
  images_url: string;
  pin: string;
  link: string;
  created_at: string;
  grid_title: string;
}

type TyPinterestSearch = TyAgatHeader & {
  data: TyPinterestSearchData[]
}

export default TyPinterestSearch;

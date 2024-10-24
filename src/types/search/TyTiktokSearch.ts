import TyAgatHeader from "../../types/partials/TyAgatHeader";

type TyTiktokSearchData = {
  title: string;
  no_watermark: string;
  music: string;
}

type TyTiktokSearch = TyAgatHeader & {
  data: TyTiktokSearchData;
}

export default TyTiktokSearch;

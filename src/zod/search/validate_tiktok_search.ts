import TyTiktokSearch from "../../types/search/TyTiktokSearch";

const tiktokSchema = global.zod.object({
  title: global.zod.string(),
  music: global.zod.string().url(),
  no_watermark: global.zod.string()
});

function validate_tiktok_search(data: TyTiktokSearch):TyTiktokSearch {
  tiktokSchema.parse(data.data);
  return data;
}

export default validate_tiktok_search;

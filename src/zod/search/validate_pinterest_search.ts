import TyPinterestSearch from "../../types/search/TyPinterestSearch";

const pinterestSchema = global.zod.object({
  id: global.zod.string(),
  images_url: global.zod.string().url(),
  pin: global.zod.string(),
  link: global.zod.string().url(),
  created_at: global.zod.string(),
  grid_title: global.zod.string()
});

function validate_pinterest_search(data: TyPinterestSearch):TyPinterestSearch {
  const parsed = data.data.filter(data => pinterestSchema.safeParse(data).success);
  data.data = parsed;
  return data;
}

export default validate_pinterest_search;

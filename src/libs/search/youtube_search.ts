import TyYoutubeSearch from "../../types/search/TyYoutubeSearch";
import validate_youtube_search from "../../zod/search/validate_youtube_search";

async function youtube_search(keyword: string): Promise<TyYoutubeSearch> {
  const buffer:any = (await global.axios.get(global.main_url + "ytsearch?message=" + keyword)).data;

  const videos = buffer.data.filter(data => data.type == "video");
  const lives = buffer.data.filter(data => data.type == "live");
  const channels = buffer.data.filter(data => data.type == "channel");

  const tmp:TyYoutubeSearch = {
    status: buffer.status,
    creator: buffer.creator,
    data: {
      videos: videos,
      lives: lives,
      channels: channels
    }
  }

  const result = validate_youtube_search(tmp);
  return result;
}

export default youtube_search;

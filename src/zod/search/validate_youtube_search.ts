import TyYoutubeSearch from "../../types/search/TyYoutubeSearch"

const videoSchema = global.zod.object({
  type: global.zod.literal("video"),
  videoId: global.zod.string(),
  url: global.zod.string().url(),
  description: global.zod.string(),
  image: global.zod.string().url(),
  thumbnail: global.zod.string().url(),
  seconds: global.zod.number(),
  timestamp: global.zod.string(),
  duration: global.zod.object({
    seconds: global.zod.number(),
    timestamp: global.zod.string()
  }),
  ago: global.zod.string().optional(),
  views: global.zod.number(),
  author: global.zod.object({
    name: global.zod.string(),
    url: global.zod.string().url()
  })
});

const liveSchema = global.zod.object({
  type: global.zod.literal("live"),
  videoId: global.zod.string(),
  url: global.zod.string().url(),
  title: global.zod.string(),
  description: global.zod.string(),
  image: global.zod.string().url(),
  thumbnail: global.zod.string().url(),
  watching: global.zod.number(),
  author: global.zod.object({
    name: global.zod.string(),
    url: global.zod.string().url()
  }),
  status: global.zod.literal("LIVE"),
});

const channelSchema = global.zod.object({
  type: global.zod.literal("channel"),
  name: global.zod.string(),
  url: global.zod.string().url(),
  baseUrl: global.zod.string(),
  id: global.zod.string(),
  title: global.zod.string(),
  about: global.zod.string(),
  image: global.zod.string().url(),
  thumbnail: global.zod.string().url(),
  verified: global.zod.boolean(),
  // videoCount: global.zod.number(),
  // videoCountLabel: global.zod.string(),
  subCount: global.zod.number(),
  subCountLabel: global.zod.string()
});


function validate_youtube_search(data: TyYoutubeSearch):TyYoutubeSearch {
  const validVideos = data.data.videos.filter(video => videoSchema.safeParse(video).success);
  const validLives = data.data.lives.filter(live => liveSchema.safeParse(live).success);
  const validChannels = data.data.channels.filter(channel => channelSchema.safeParse(channel).success);

  data.data.videos = validVideos;
  data.data.lives = validLives;
  data.data.channels = validChannels;
  return data;
}

export default validate_youtube_search;

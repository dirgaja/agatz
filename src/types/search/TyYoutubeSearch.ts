import TyAgatHeader from "@/types/partials/TyAgatHeader";
import TyAuthor from "@/types/partials/TyAuthor";

type TyYoutubeSearchDataVideo = TyAuthor & {
  type: "video";
  videoId: string;
  url: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  seconds: number;
  timestamp: string;
  duration: {
    seconds: number;
    timestamp: string;
  };
  ago?: string;
  views: number;
};

type TyYoutubeSearchDataChannel = {
  type: "channel";
  name: string;
  url: string;
  baseUrl: string;
  id: string;
  title: string;
  about: string;
  image: string,
  thumbnail: string;
  verified: boolean;
  // videoCount: number;
  // videoCountLabel: string;
  subCount: number;
  subCountLabel: string;
};

type TyYoutubeSearchDataLive = {
  type: "live";
  videoId: string;
  url: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  watching: number;
  author: {
    name: string;
    url: string;
  };
  status: "LIVE";
}

type TyYoutubeSearch = TyAgatHeader & {
  data: {
    videos: TyYoutubeSearchDataVideo[];
    channels: TyYoutubeSearchDataChannel[];
    lives: TyYoutubeSearchDataLive[];
  }
}

export default TyYoutubeSearch;

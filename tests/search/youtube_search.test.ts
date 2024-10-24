import { youtube_search } from "../../src";

describe("Pencarian youTube", () => {
  test("Mencari video", async () => {
    const keyword = "lagu muhammadiyah";
    const result = await youtube_search(keyword);
    
    const videosOnly = result.data.videos;
    expect(videosOnly.length > 1).toBe(true);
  }, 30_000);
  
  test("Mencari live", async () => {
    const keyword = "video live";
    const result = await youtube_search(keyword);
    
    const livesOnly = result.data.lives;
    expect(livesOnly.length > 1).toBe(true);
  }, 30_000);
  
  test("Mencari channel", async () => {
    const keyword = "channel muhammadiyah";
    const result = await youtube_search(keyword);
    
    const channelOnly = result.data.channels;
    expect(channelOnly.length > 1).toBe(true);
  }, 30_000);
});

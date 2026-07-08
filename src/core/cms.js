import { games as localGames } from "../data/games";
import { news as localNews } from "../data/news";

class CmsService {
  constructor() {
    this.apiUrl = import.meta.env.VITE_CMS_API_URL || null;
  }

  async getGames() {
    if (!this.apiUrl) {
      return localGames;
    }

    try {
      const response = await fetch(`${this.apiUrl}/games`);
      if (!response.ok) throw new Error("CMS fetch failed");
      const data = await response.json();
      return data.length ? data : localGames;
    } catch (error) {
      console.warn("CMS error: Falling back to local games data.", error);
      return localGames;
    }
  }

  async getNews() {
    if (!this.apiUrl) {
      return localNews;
    }

    try {
      const response = await fetch(`${this.apiUrl}/news`);
      if (!response.ok) throw new Error("CMS fetch failed");
      const data = await response.json();
      return data.length ? data : localNews;
    } catch (error) {
      console.warn("CMS error: Falling back to local news data.", error);
      return localNews;
    }
  }
}

const cmsService = new CmsService();
export default cmsService;

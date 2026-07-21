import { mockRoadmaps } from "@/data/mock/mockRoadmaps";
import { Roadmap } from "@/types/journey/roadmap";

class RoadmapEngine {

  getAll(): Roadmap[] {
    return mockRoadmaps;
  }

  getByPath(path: Roadmap["path"]): Roadmap | undefined {
    return mockRoadmaps.find(
      roadmap => roadmap.path === path
    );
  }

  getById(id: string): Roadmap | undefined {
    return mockRoadmaps.find(
      roadmap => roadmap.id === id
    );
  }

}

export const roadmapEngine = new RoadmapEngine();
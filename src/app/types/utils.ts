export interface PlayerStats {
  result: boolean;
  name: string;
  account: {
    level: number;
    progress_pct: number;
  };
  accountLevelHistory: {
    season: number;
    level: number;
    process_pct: number;
  }[];
  global_stats: {
    solo: {
      placetop1: number;
      kd: number;
      winrate: number;
      placetop3: number;
      placetop5: number;
      placetop6: number;
      placetop10: number;
      placetop12: number;
      placetop25: number;
      kills: number;
      matchesplayed: number;
      minutesplayed: number;
      score: number;
      playersoutlived: number;
      lastmodified: number;
    };
  };
  per_input: {
    keyboardmouse: {
      solo: {
        placetop1: number;
        kd: number;
        winrate: number;
        placetop3: number;
        placetop5: number;
        placetop6: number;
        placetop10: number;
        placetop12: number;
        placetop25: number;
        kills: number;
        matchesplayed: number;
        minutesplayed: number;
        score: number;
        playersoutlived: number;
        lastmodified: number;
      };
    };
  };
  seasons_available: number[];
}

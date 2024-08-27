/*   STEP 1   */
export const leagueID = "1049224123165065216"; // your league ID
export const leagueName = "The League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the battleground of our fantasy football dynasty league, where legends are made and rivalries never die. Captain Flacco's, led by the one and only Ginger, sits atop the throne after a dominating 2023 season. But don't get too comfortable, champ—there’s a new wave of challengers coming for that crown! Will Ginger's reign continue, or is a new king about to be crowned?</p>
  <p>Meanwhile, Mussolini Nick G’s team had a less-than-stellar year, clinching the title no one wants—the reigning "shit bowl" loser. Redemption is a long road, but hey, there's nowhere to go but up, right? Can Mussolini rise from the ashes, or will he remain at the bottom of the heap?</p>
  <p>The first rookie draft has just kicked off, and the buzz is electric. Analysis and expert opinions are just around the corner, so stay tuned to see who’s making the smart moves and who’s rolling the dice on pure luck. Will the rookies shake up the league, or will the veterans maintain their dominance?</p>
  <p>The New York Hot Steppers, under Chew’s command, are stirring the pot in a big way. There’s a power struggle brewing as Chewy, dubbed "the people's commish," leads an insurrection against Mussolini Nick G for the league commissioner title. This showdown could reshape the league as we know it. Will Chewy seize control, or will Mussolini cling to power?</p>
  <p>Over in Matty P’s camp, Back Field Penetration is starting to show its age. Rumor has it they’re about to apply for social security! Will experience and wisdom carry them through another season, or is it time to hang up the cleats? Is there one last run left, or will Father Time finally claim his due?</p>
  <p>Will Walshie ever reclaim his fingertip? Will Bob find love in the Alamo? Will Max Gold do anything of value? Will Tyler ever stop clacking on his keyboard? Will Dimitri ever stop making shady phone calls? Will Vin bounce back from Lyme disease? Will Mayo hang himself, or will his opponent be the one to dangle? Tune into The League's 2024-2025 Dynasty Fantasy Football Season to find out!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "managerID": "645466755229270016",
    "name": "tdodd777",
    "location": "Location not provided", // Replace if known
    "bio": "Good guys",
    "photo": "https://sleepercdn.com/uploads/3a2d7c1d78c1761704cb40f2f23b965e.jpg",
    "fantasyStart": null,
    "favoriteTeam": null, // Replace if known
    "mode": "Win Now",
    "rival": {
      name: "Rival Name", // Replace if known
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null, // Replace if known
    "valuePosition": null, // Replace if known
    "rookieOrVets": "Rookies",
    "philosophy": "Dominate the league every year.",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "managerID": "869048196658290688",
    "name": "NickGuaglione",
    "location": "Location not provided",
    "bio": "Mussolini",
    "photo": "https://sleepercdn.com/uploads/371554db83cf917378abe28949c1be88.jpg",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": "Win Now",
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": "Rookies",
    "philosophy": "Win at all costs.",
    "tradingScale": 8,
    "preferredContact": "Sleeper",
  },
  {
    "managerID": "996628148437467136",
    "name": "maxgoldsholle",
    "location": "Location not provided",
    "bio": "Hawk Tua",
    "photo": "https://sleepercdn.com/images/v2/avatars/avatar_default_green.webp",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": "Rebuild",
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": "QB",
    "rookieOrVets": "Rookies",
    "philosophy": "Patience is key.",
    "tradingScale": 7,
    "preferredContact": "Email",
  },
  {
    "managerID": "996628221422628864",
    "name": "Damtree22",
    "location": "Location not provided",
    "bio": null, // No team name provided
    "photo": null, // No avatar provided
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628370026786816",
    "name": "lwalshe17",
    "location": "Location not provided",
    "bio": null, // No team name provided
    "photo": null, // No avatar provided
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628375248613376",
    "name": "bob714",
    "location": "Location not provided",
    "bio": null, // No team name provided
    "photo": "https://sleepercdn.com/uploads/9022819029eaef8f72f22593f5a949b5.jpg",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628431523627008",
    "name": "Braio",
    "location": "Location not provided",
    "bio": "Cleveland Steamers",
    "photo": "https://sleepercdn.com/uploads/033157955b114eeda2f7d0622b30c654.jpg",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628442974068736",
    "name": "mattyp2685",
    "location": "Location not provided",
    "bio": "Backfield Penetration",
    "photo": null, // No avatar provided
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628478122405888",
    "name": "vinnyvarone21",
    "location": "Location not provided",
    "bio": "Suicidal Sheep",
    "photo": "https://sleepercdn.com/uploads/d3c76498d3de8166a5dfb2f2bd099fd7.jpg",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996628992037908480",
    "name": "nmeyer5691",
    "location": "Location not provided",
    "bio": "New York Hotsteppers",
    "photo": "https://sleepercdn.com/uploads/f48a0951da377d1d411053b44d6e6a70.jpg",
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996629628519329792",
    "name": "mbernzweig",
    "location": "Location not provided",
    "bio": "Captain Flacco’s",
    "photo": null, // No avatar provided
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  },
  {
    "managerID": "996629818110160896",
    "name": "ghueber",
    "location": "Location not provided",
    "bio": "JAH MYR BOY",
    "photo": null, // No avatar provided
    "fantasyStart": null,
    "favoriteTeam": null,
    "mode": null,
    "rival": {
      name: "Rival Name",
      link: null,
      image: "/managers/question.png",
    },
    "favoritePlayer": null,
    "valuePosition": null,
    "rookieOrVets": null,
    "philosophy": null,
    "tradingScale": null,
    "preferredContact": "Text",
  }
];

  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    

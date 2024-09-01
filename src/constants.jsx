export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR ="https://avatars.githubusercontent.com/u/152471392?v=4";


export const BG_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"


export const API_MOVIE = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDVlNDNjMDgzYjRlZDY2ZmI3NTAwZmYzZTI1NTY4NSIsIm5iZiI6MTcyNTA0NzcyNy44MjkxMDMsInN1YiI6IjY2ZDFmNDE5ZGM3YmU4ZjM4NTBmZDkyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CDDQgp_ZHFJOSJ_ZNXDKtOav2Bq9T0-wICln-fp6a2g",
  },
};

export const API_NOW_PLAYING = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      process.env.REACT_APP_TMDB_API,
  },
};

export const IMG_URL="https://image.tmdb.org/t/p/w780"

export const SUPPORTED_LANGUAGES=[
  {identifire:"en",language:"English" },
  {identifire:"ml",language:"Malayalam" },
  {identifire:"hindi",language:"Hindi" }
]


export const GEMINI_API= process.env.REACT_APP_GEMINI_API_KEY
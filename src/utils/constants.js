export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/sunny.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/daycloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/dayrain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/daystorm.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/daysnow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/dayfog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/nightsunny.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/nightcloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/nightrain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/nightstorm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/nightsnow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/nightfog.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night.svg", import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    imageUrl: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 33.95067,
  longitude: -84.11094,
};

export const APIkey = "65f3784017ded660b285f09b0fe56a3b";

const baseUrl = process.env.NODE_ENV === "production"
  ? "https://api.what2wear.minecraftnoob.com"
  : "http://localhost:3001";

  export { baseUrl };
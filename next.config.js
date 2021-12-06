const path = require("path");

module.exports = {
  reactStrictMode: true,
  env: {
    API_HOST: "https://zwalet.herokuapp.com",
    MT_CLIENT_KEY: "SB-Mid-client-QfpskjY_JrVoNJgZ",
    MT_SERVER_KEY: "SB-Mid-server-PpNyUzZ7wXIBHovslfS9xvkl",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

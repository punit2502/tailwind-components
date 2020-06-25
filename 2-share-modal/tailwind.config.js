module.exports = {
  purge: ["./src/**/*/js"],
  theme: {
    extend: {
      colors: {
        primary: "#D66A3A",
        modal: {
          bg: "#EBECED",
          overlay: "rgba(0,0,0,.6)",
        },
        social: {
          facebook: "#405896",
          twitter: "#1DA1F2",
          reddit: "#000000",
        },
      },
      inset: {
        1: "1.5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};

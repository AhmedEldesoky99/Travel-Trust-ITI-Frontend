/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
        header: ["Hachi Maru Pop", "cursive"],
      },
      screens: {
        "2xs": "320px",
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "primary-green": "#009EB7",
        "secondary-yellow": "#FFD766",
        "tertiary-red": "#DB3A34",
        "light-gray": "#585858",
        "glass-gray": "#767676",
        "lighter-gray": "#D9D9D9",
        "admin-grey": "#f5f8f9",
      },
      backgroundImage: {
        "join-us": "url('/src/assets/images/joinbg.jpg')",
        "login-user": "url('/src/assets/images/login user.jpg')",
        "sign-up-user": "url('/src/assets/images/signup user.jpg')",
        "logo-join": "url('/src/assets/images/Logo/logo.png')",
        "g-logo": "url('/src/assets/images/Logo/g-logo.png')",
        eachGovernorateBG:
          "url('/src/assets/images/EachGovernorate/EachGovernorateBG.png')",
        fish: "url('/src/assets/images/EachGovernorate/Fish.png')",
        salesBG: "url('/src/assets/images/Sales/SalesBG.png')",
        homeHeader: "url('/src/assets/images/Home/Header/Header.jpg')",
        salesHeader:
          "url('/src/assets/images/Home/SalesHeader/SalesHeader.png')",
        egyptionPharaoh:
          "url('/src/assets/images/Home/VideoSection/EgyptionPharaoh.png')",
        joinUsHome: "url('/src/assets/images/Home/JoinUs/JoinUs.png')",
        emptyCart: "url('/src/assets/images/Cart/emptyCart.png')",
        emptyFav: "url('/src/assets/images/Favorite/emptyFav.png')",
        "signup-admin": "url('/src/assets/images/Admin/admin-signUp.png')",
        "login-admin": "url('/src/assets/images/Admin/admin-logIn.png')",
        tourDetailsBG:
          "url('/src/assets/images/TourDetails/TourDetailsBG.png')",
        allToursBG: "url('/src/assets/images/AllTours/AllToursBG.png')",
        contactUs: "url('/src/assets/images/Contact/Contact.png')",
        parallax: "url('/src/assets/images/Contact/parallax.png')",

        DestinationsBg:
          "url('/src/assets/images/Destinations/Egypt-Felucca-on-the-Nile.jpg')",
          mainAdminBG:"url('/src/assets/images/TourCard/GizaCover.jpeg')"
      },
      height: {
        inherit: "inherit",
        fit: "fit-content",
      },
      minHeight: {
        inherit: "inherit",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

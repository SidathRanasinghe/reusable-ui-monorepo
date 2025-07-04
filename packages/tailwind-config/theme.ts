export const colors = {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
    50: "hsl(232, 100%, 96%)", // #E6E7FF
    75: "hsl(231, 100%, 82%)", // #A5ADFF
    100: "hsl(231, 100%, 75%)", // #8591FF
    200: "hsl(231, 100%, 64%)", // #4F61FF
    300: "hsl(231, 100%, 57%)", // #2C42FF
    400: "hsl(231, 100%, 45%)", // #001FFF
    500: "hsl(231, 100%, 35%)", // #0018C6
  },
  dark: {
    50: "hsl(0, 0%, 91%)", // #E8E8E8
    75: "hsl(210, 1%, 64%)", // #A3A4A6
    100: "hsl(210, 1%, 49%)", // #7C7D7F
    200: "hsl(210, 3%, 27%)", // #424446
    300: "hsl(216, 8%, 13%)", // #1E2023
    400: "hsl(225, 9%, 9%)", // #13141A
    500: "hsl(200, 8%, 8%)", // #111315
  },
  grey: {
    50: "hsl(210, 11%, 96%)", // #F3F5F8
    75: "hsl(220, 10%, 94%)", // #EEF0F5
    100: "hsl(210, 10%, 92%)", // #E8ECF1
    150: "hsl(214, 10%, 86%)", // #D8DBDF
    200: "hsl(216, 8%, 88%)", // #DFE2E7
    300: "hsl(214, 10%, 86%)", // #D7DCE3
    400: "hsl(216, 2%, 60%)", // #989999 dark: 100
    450: "hsl(216, 7%, 53%)", // #81878F
    500: "hsl(210, 2%, 53%)", // #868789
  },
  "cadet-gray": {
    0: "hsla(0, 0%, 100%, 1)",
    0.5: "hsla(210, 10%, 32%, 0.1)",
    1: "hsla(215, 9%, 93%, 1)",
    1.5: "hsla(215, 9%, 89%, 1)",
    2: "hsla(215, 9%, 86%, 1)",
    3: "hsla(215, 9%, 79%, 1)",
    4: "hsla(215, 9%, 72%, 1)",
    5: "hsla(215, 9%, 65%, 1)",
    6: "hsla(215, 6%, 53%, 1)",
    7: "hsla(216, 5%, 42%, 1)",
    8: "hsla(216, 6%, 30%, 1)",
    8.5: "hsla(217, 6%, 24%, 1)",
    9.5: "hsla(218, 7%, 13%, 1)",
  },
  "uber-blue": {
    0.5: "hsla(231, 100%, 96%, 1)",
    1: "hsla(231, 100%, 83%, 1)",
    2: "hsla(231, 100%, 83%, 1)",
    3: "hsla(231, 100%, 74%, 1)",
    4: "hsla(231, 100%, 66%, 1)",
    5: "hsla(231, 100%, 57%, 1)",
  },
  "dark-blue": {
    0: "hsla(215, 64%, 27%, 1)",
    1: "hsla(215, 64%, 20%, 1)",
    2: "hsla(215, 64%, 13%, 1)",
    3: "hsla(215, 64%, 8%, 1)",
  },
  shade: {
    0: "hsl(0, 0%, 0%)", // #000000
    1: "hsl(0, 0%, 100%)", // #FFFFFF
  },
};

export const screens = {
  xs: { max: "576px" },
  sm: { min: "577px", max: "768px" },
  xs_sm: { max: "768px" },
  md: { min: "769px", max: "1024px" },
  lg: { min: "1025px", max: "1440px" },
  xxl: { min: "1441px" },
};

export const boxShadows = {
  "dark-10": "0 0 5px hsla(210, 10%, 32%, 0.1)",
  "dark-50": "0 0 1px hsla(210, 8%, 13%, 1)",
};

// export also as CommonJS for compatibility
module.exports = {
  colors,
  screens,
  boxShadows,
};

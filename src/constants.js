import image1Main from './images/image1/main.png';
import image1Foreground from './images/image1/foreground.png';
import image1Middleground from './images/image1/middleground.png';
import image1Background from './images/image1/background.png';

export const IMAGE_CONFIGS = [
  {
    path: "/image1_with_alt_text",
    title: "First image with Alt Text",
    main: {
      image: image1Main,
      altText: "A couple standing with Eilean Donan Castle in the distance",
    },
  },
  {
    path: "/image1_with_dimensional_alt_text",
    title: "First image with Dimensional Alt Text",
    main: {
      image: image1Main,
      altText: "A couple standing with Eilean Donan Castle in the distance, tap dimension thumbnails below for more details",
    },
    foreground: {
      image: image1Foreground,
      altText: "Foreground. Gregor and Caitlin are holding each other, smiling. Gragor puts his hand on the baby bump.",
    },
    middleground: {
      image: image1Middleground,
      altText: "Middle ground. A scenic view of the lake Loch Long reflecting the autumn sunshine",
    },
    background: {
      image: image1Background,
      altText: "Background. Eilean Donan Castle with layers of mountains in the back on a blue sky day with clouds",
    },
  }
];
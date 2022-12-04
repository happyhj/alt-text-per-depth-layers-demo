import image1Main from './images/image1/main.png';
import image1Foreground from './images/image1/foreground.png';
import image1Middleground from './images/image1/middleground.png';
import image1Background from './images/image1/background.png';

import image2Main from './images/image2/main.png';
import image2Foreground from './images/image2/foreground.png';
import image2Middleground from './images/image2/middleground.png';
import image2Background from './images/image2/background.png';

import image3Main from './images/image3/main.png';
import image3Foreground from './images/image3/foreground.png';
import image3Background from './images/image3/background.png';


export const ROOT_PATH = "/alt-text-per-depth-layers-demo";

export const IMAGE_CONFIGS = [
  {
    name: "A1",
    main: {
      image: image1Main,
      altText: "A couple standing with Eilean Donan Castle in the distance",
    },
  },
  {
    name: "A2",
    main: {
      image: image1Main,
      altText: "A couple standing with Eilean Donan Castle in the distance. Tap the dimension thumbnails below for more details.",
    },
    foreground: {
      image: image1Foreground,
      altText: "Foreground. Gregor and Caitlin are holding each other, smiling. Gregor is putting his hand on the baby bump.",
    },
    middleground: {
      image: image1Middleground,
      altText: "Middle ground. A scenic view of lake Loch Long reflecting the autumn sunshine",
    },
    background: {
      image: image1Background,
      altText: "Background. Eilean Donan Castle with layers of mountains in the back on a blue sky day with clouds",
    },
  },
  {
    name: "B1",
    main: {
      image: image2Main,
      altText: "Vini Jr. celebrating his goal for the Brazilian team along with Neymar at Maracanã stadium.",
    },
  },
  {
    name: "B2",
    main: {
      image: image2Main,
      altText: "Vini Jr. celebrating his goal for the Brazilian team along with Neymar at Maracanã stadium. Tap the dimension thumbnails below for more details.",
    },
    foreground: {
      image: image2Foreground,
      altText: "Foreground. Neymar jumped on the back of Vini Jr..Both screaming in celebration, around the corner flag.",
    },
    middleground: {
      image: image2Middleground,
      altText: "Middle ground. Gabriel Jesus and Lucas Paqueta running toward the two to celebrate.",
    },
    background: {
      image: image2Background,
      altText: "Background. Low-angle view of Maracanã stadium lit up at night.",
    },
  },
  {
    name: "C1",
    main: {
      image: image3Main,
      altText: "A happy couple taking intimate selfie near the Flat Iron Building.",
    },
  },
  {
    name: "C2",
    main: {
      image: image3Main,
      altText: "A happy couple taking intimate selfie near the Flat Iron Building. Tap the dimension thumbnails below for more details.",
    },
    foreground: {
      image: image3Foreground,
      altText: "Foreground. A bearded man in a red windbreaker jacket taking a selfie leaning his back on his partner. The woman with long dark blonde hair in a light blue jacket is hugging him from behind and kissing him on the cheek while closing her eyes.",
    },
    background: {
      image: image3Background,
      altText: "Background. Low-angle view of the Flat Iron and streetscape on a cloudy day.",
    },
  }
];
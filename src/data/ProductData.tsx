export interface IProductData {
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  discounted_price?: number;
  ratings: { stars: number };
}

export const ProductData: IProductData[] = [
  {
    image: "https://example.com/product1.jpg",
    name: "GreenClean All-Purpose Cleaner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
    color: "Black",
    discounted_price: 39.99,
    ratings: {
      stars: 4.5,
    },
  },
  {
    image: "https://example.com/product2.jpg",
    name: "EcoBloom Plant Fertilizer",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 29.99,
    color: "Black",

    ratings: {
      stars: 3.8,
    },
  },
  {
    image: "https://example.com/product3.jpg",
    name: "NatureNest Bamboo Toothbrush",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: 79.99,
    color: "Red",
    discounted_price: 69.99,
    ratings: {
      stars: 4.9,
    },
  },
  {
    image: "https://example.com/product4.jpg",
    name: "PureAir HEPA Air Purifier",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 19.99,
    color: "Red",
    ratings: {
      stars: 4.2,
    },
  },
  {
    image: "https://example.com/product5.jpg",
    name: "EcoHarmony Organic Bedding Set",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 59.99,
    color: "Green",
    ratings: {
      stars: 3.5,
    },
  },
  {
    image: "https://example.com/product6.jpg",
    name: "SolarGlow Outdoor Lights",
    description:
      "Cras interdum ligula eu enim tempus, sit amet fermentum ex luctus.",
    price: 34.99,
    color: "Green",
    ratings: {
      stars: 4.0,
    },
  },
  {
    image: "https://example.com/product7.jpg",
    name: "EarthCrate Recycled Storage Box",
    description:
      "Vivamus consectetur quam nec magna bibendum, at consectetur dolor dignissim.",
    price: 89.99,
    color: "Blue",
    ratings: {
      stars: 4.7,
    },
  },
  {
    image: "https://example.com/product8.jpg",
    name: "RenewaBrew Coffee Maker",
    description:
      "Pellentesque tristique nulla nec nisi varius, eget vestibulum orci vestibulum.",
    price: 22.99,
    color: "Blue",
    discounted_price: 18.99,
    ratings: {
      stars: 3.9,
    },
  },
  {
    image: "https://example.com/product9.jpg",
    name: "EverFresh Food Storage Containers",
    description:
      "Aliquam mattis neque in nisl lacinia, id fermentum quam egestas.",
    price: 44.99,
    color: "Brown",
    ratings: {
      stars: 4.2,
    },
  },
  {
    image: "https://example.com/product10.jpg",
    name: "EcoCycle Recycling Bin",
    description:
      "Fusce dapibus lacus a neque dignissim, ut rhoncus lorem ultricies.",
    price: 55.99,
    color: "Brown",
    ratings: {
      stars: 4.8,
    },
  },
  {
    image: "https://example.com/product11.jpg",
    name: "EarthKind Beeswax Food Wraps",
    description:
      "Nam congue felis quis nibh tristique, eu dictum nunc interdum.",
    price: 30.99,
    color: "Yellow",
    ratings: {
      stars: 3.6,
    },
  },
  {
    image: "https://example.com/product12.jpg",
    name: "AquaFlow Water-saving Showerhead",
    description:
      "Nullam nec elit dapibus, condimentum lorem nec, fermentum nisi.",
    price: 19.99,
    color: "Yellow",
    ratings: {
      stars: 4.1,
    },
  },
  {
    image: "https://example.com/product13.jpg",
    name: "TerraTable Bamboo Cutting Board",
    description: "Vestibulum a odio ac urna pharetra feugiat et in ligula.",
    price: 67.99,
    discounted_price: 59.99,
    color: "Yellow",
    ratings: {
      stars: 4.6,
    },
  },
  {
    image: "https://example.com/product14.jpg",
    name: "HarmonyHome Compost Bin",
    description: "Morbi in tortor nec elit semper ultricies eget at odio.",
    price: 24.99,
    color: "Yellow",
    ratings: {
      stars: 3.7,
    },
  },
  {
    image: "https://example.com/product15.jpg",
    name: "GreenGrip Reusable Silicone Food Wrap",
    description:
      "Donec varius odio sit amet purus tristique, eu consequat nisi tristique.",
    price: 39.99,
    color: "Red",
    ratings: {
      stars: 4.3,
    },
  },
  {
    image: "https://example.com/product16.jpg",
    name: "LeafLife Biodegradable Dish Soap",
    description: "Proin id nisl aliquam, posuere enim ut, fermentum sapien.",
    price: 49.99,
    color: "Red",
    ratings: {
      stars: 3.9,
    },
  },
  {
    image: "https://example.com/product17.jpg",
    name: "RenewWatt Solar Phone Charger",
    description:
      "Aenean laoreet orci eget nunc euismod, et tincidunt metus condimentum.",
    price: 64.99,
    color: "Purple",
    ratings: {
      stars: 4.8,
    },
  },
  {
    image: "https://example.com/product18.jpg",
    name: "EcoTrek Insulated Water Bottle",
    description: "Maecenas sit amet risus ut libero convallis vehicula.",
    price: 29.99,
    color: "Red",
    ratings: {
      stars: 3.5,
    },
  },
  {
    image: "https://example.com/product19.jpg",
    name: "BioBloom Indoor Plant Pot",
    description: "Suspendisse in enim sed odio aliquet malesuada.",
    price: 54.99,
    color: "Purple",
    ratings: {
      stars: 4.2,
    },
  },
  {
    image: "https://example.com/product20.jpg",
    name: "PureEase Natural Laundry Detergent",
    description: "Duis vel elit sit amet est malesuada fringilla ut nec ex.",
    price: 35.99,
    color: "Red",
    ratings: {
      stars: 4.0,
    },
  },
];

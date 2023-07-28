export interface IProductData {
  category: string;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  discounted_price?: number;
  ratings: { stars: number; count: number };
}

export const ProductData: IProductData[] = [
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "GreenClean All-Purpose Cleaner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
    color: "Black",
    discounted_price: 39.99,
    ratings: {
      stars: 4.5,
      count: 2512,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "CulinaryMaster Chef's Knife",
    description:
      "A versatile and sharp chef's knife for all your culinary needs.",
    price: 69.99,
    discounted_price: 45.99,

    color: "White",
    ratings: {
      stars: 4.8,
      count: 1378,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "VintageHarvest Wooden Salad Bowl",
    description:
      "Eco-friendly wooden bowl perfect for serving salads in style.",
    price: 29.99,
    discounted_price: 16.99,
    color: "Brown",
    ratings: {
      stars: 4.6,
      count: 872,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "ZenServe Porcelain Dinnerware Set",
    description:
      "Elevate your dining experience with this elegant porcelain dinnerware set.",
    price: 89.99,
    color: "White",
    ratings: {
      stars: 4.7,
      count: 2156,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "NatureSip Glass Water Bottles (Set of 3)",
    description:
      "Stay hydrated and eco-friendly with these reusable glass water bottles.",
    price: 19.99,
    color: "Blue",
    ratings: {
      stars: 4.4,
      count: 980,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "SavorySpice Premium Spice Rack",
    description:
      "Organize your spices and add flavor to your culinary creations.",
    price: 34.99,
    color: "Stainless Steel",
    discounted_price: 29.99,
    ratings: {
      stars: 4.9,
      count: 1605,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "BambooBlend Cutting Board Set (Pack of 2)",
    description:
      "Durable and eco-friendly cutting boards for all your food prep needs.",
    price: 25.99,
    color: "Green",
    ratings: {
      stars: 4.6,
      count: 1320,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "UrbanGrind Electric Coffee Grinder",
    description:
      "Enjoy freshly ground coffee at home with this powerful coffee grinder.",
    price: 39.99,
    color: "Black",
    ratings: {
      stars: 4.3,
      count: 982,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "EcoFusion Glass Meal Prep Containers (Set of 5)",
    description:
      "Store your meals in these airtight and microwave-safe glass containers.",
    price: 32.99,
    color: "Green",
    ratings: {
      stars: 4.7,
      count: 1400,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "BrewMist Cold Brew Coffee Maker",
    description:
      "Brew smooth and refreshing cold brew coffee at home with ease.",
    price: 27.99,
    discounted_price: 14.99,

    color: "White",
    ratings: {
      stars: 4.8,
      count: 1756,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "ChefBlend Stainless Steel Mixing Bowls (Set of 3)",
    description:
      "A set of durable and versatile stainless steel mixing bowls for all your culinary needs.",
    price: 35.99,
    color: "White",
    ratings: {
      stars: 4.7,
      count: 1890,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "BrewMate Cold Brew Coffee Maker",
    description:
      "Brew smooth and refreshing cold brew coffee at home with this convenient coffee maker.",
    price: 32.99,
    color: "White",
    ratings: {
      stars: 4.5,
      count: 1698,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "Gourmex Non-Stick Baking Sheet",
    description:
      "Bake delicious treats without sticking with this high-quality non-stick baking sheet.",
    price: 24.99,
    color: "Black",
    ratings: {
      stars: 4.6,
      count: 1425,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "PureSip Glass Teapot with Infuser",
    description:
      "Brew your favorite teas with this elegant and heat-resistant glass teapot.",
    price: 22.99,
    color: "Brown",
    ratings: {
      stars: 4.8,
      count: 1245,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "ServeWell Bamboo Cutlery Set (Pack of 6)",
    description:
      "Replace single-use plastic with this eco-friendly and reusable bamboo cutlery set.",
    price: 19.99,
    color: "Brown",
    ratings: {
      stars: 4.6,
      count: 1123,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "UrbanGrill Cast Iron Skillet",
    description:
      "Cook, sear, and bake with this versatile and durable cast iron skillet.",
    price: 44.99,
    discounted_price: 32.99,

    color: "Black",
    ratings: {
      stars: 4.9,
      count: 1998,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "EasyPeel Fruit and Vegetable Peeler",
    description:
      "Effortlessly peel fruits and vegetables with this ergonomic and sharp peeler.",
    price: 8.99,
    color: "Red",
    ratings: {
      stars: 4.5,
      count: 869,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "FineDine Wine Glasses (Set of 4)",
    description:
      "Enjoy your favorite wines with these elegant and crystal-clear wine glasses.",
    price: 27.99,
    color: "Clear",
    ratings: {
      stars: 4.7,
      count: 1245,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "PureBake Silicone Baking Mat (Pack of 2)",
    description:
      "Bake without greasing with these non-stick and reusable silicone baking mats.",
    price: 14.99,
    color: "Gray",
    ratings: {
      stars: 4.8,
      count: 1590,
    },
  },
  {
    category: "kitchen-dining",
    image: "https://placehold.co/250x350",
    name: "CulinaryCrafts Pasta Maker Machine",
    description:
      "Make fresh and delicious pasta from scratch with this pasta maker machine.",
    price: 49.99,
    color: "Stainless Steel",
    ratings: {
      stars: 4.7,
      count: 1689,
    },
  },

  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "SerenityBliss Scented Candle Set",
    description:
      "Create a calming ambiance with this delightful scented candle set.",
    price: 19.99,
    color: "Gray",
    discounted_price: 16.99,
    ratings: {
      stars: 4.7,
      count: 1885,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "ModernArt Canvas Wall Art",
    description:
      "Add a touch of modern elegance to your walls with this stunning canvas art.",
    price: 69.99,
    discounted_price: 32.99,

    color: "Multicolor",
    ratings: {
      stars: 4.9,
      count: 2056,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "CozyHaven Decorative Throw Pillow Set",
    description:
      "Enhance your living space with these soft and stylish throw pillows.",
    price: 39.99,
    color: "Gray",
    ratings: {
      stars: 4.6,
      count: 1567,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "LuminanceGlow Himalayan Salt Lamp",
    description:
      "Bring a warm and soothing glow to your home with this natural salt lamp.",
    price: 24.99,
    discounted_price: 16.99,

    color: "Orange",
    ratings: {
      stars: 4.4,
      count: 1045,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "SerenityBliss Scented Candle Set",
    description:
      "Create a calming ambiance with this delightful scented candle set.",
    price: 19.99,
    color: "Gray",
    discounted_price: 16.99,
    ratings: {
      stars: 4.7,
      count: 1885,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "ModernArt Canvas Wall Art",
    description:
      "Add a touch of modern elegance to your walls with this stunning canvas art.",
    price: 69.99,
    color: "Multicolor",
    ratings: {
      stars: 4.9,
      count: 2056,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "CozyHaven Decorative Throw Pillow Set",
    description:
      "Enhance your living space with these soft and stylish throw pillows.",
    price: 39.99,
    color: "Gray",
    ratings: {
      stars: 4.6,
      count: 1567,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "LuminanceGlow Himalayan Salt Lamp",
    description:
      "Bring a warm and soothing glow to your home with this natural salt lamp.",
    price: 24.99,
    color: "Orange",
    discounted_price: 19.99,
    ratings: {
      stars: 4.4,
      count: 1045,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "ChicThrows Knitted Blanket",
    description:
      "Wrap yourself in warmth with this cozy and stylish knitted blanket.",
    price: 35.99,
    color: "White",
    ratings: {
      stars: 4.5,
      count: 1290,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "UrbanGlow LED Fairy Lights",
    description:
      "Create a magical atmosphere with these enchanting LED fairy lights.",
    price: 12.99,
    color: "White",
    ratings: {
      stars: 4.7,
      count: 1923,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "ElegantLace Window Curtains (Set of 2)",
    description:
      "Add a touch of sophistication to your windows with these elegant lace curtains.",
    price: 32.99,
    color: "White",
    discounted_price: 28.99,
    ratings: {
      stars: 4.6,
      count: 1422,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "UrbanElegance Wall Mirror",
    description: "Adorn your walls with this stylish and modern wall mirror.",
    price: 42.99,
    color: "Black",
    ratings: {
      stars: 4.9,
      count: 2156,
    },
  },
  {
    category: "home-decor",
    image: "https://placehold.co/250x350",
    name: "RusticCharm Picture Frame Collage",
    description:
      "Display your cherished memories with this rustic picture frame collage.",
    price: 26.99,
    color: "Brown",
    ratings: {
      stars: 4.6,
      count: 1921,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "EcoSweep Broom and Dustpan Set",
    description:
      "Efficiently clean your floors with this eco-friendly broom and dustpan combo.",
    price: 24.99,
    color: "Green",
    ratings: {
      stars: 4.4,
      count: 1098,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "AllClear Glass Cleaner Spray",
    description:
      "Achieve streak-free shine on your windows and glass surfaces.",
    price: 12.99,
    color: "Blue",
    ratings: {
      stars: 4.3,
      count: 875,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "FreshGlow Air Purifier",
    description:
      "Breathe cleaner air with this powerful and stylish air purifier.",
    price: 89.99,
    color: "White",
    ratings: {
      stars: 4.7,
      count: 1923,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "UltraAbsorb Microfiber Cleaning Cloths (Pack of 8)",
    description:
      "These super-absorbent microfiber cloths make cleaning a breeze.",
    price: 15.99,
    color: "Gray",
    ratings: {
      stars: 4.5,
      count: 1225,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "GleamGrip Extendable Duster",
    description:
      "Reach high and low with this adjustable and effective duster.",
    price: 19.99,
    color: "Yellow",
    ratings: {
      stars: 4.6,
      count: 1123,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "EcoFresh Natural All-Purpose Cleaner Refill",
    description:
      "Refill your spray bottles sustainably with this eco-friendly cleaner concentrate.",
    price: 14.99,
    color: "Red",
    ratings: {
      stars: 4.7,
      count: 895,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "SparkPlug Electric Soldering Iron Kit",
    description: "Ideal for electronics and DIY soldering projects.",
    price: 24.99,
    color: "Blue",
    ratings: {
      stars: 4.4,
      count: 876,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "HomeShine Power Scrubber Brush Set (Pack of 4)",
    description:
      "Effortlessly tackle tough stains with this power scrubber brush set.",
    price: 19.99,
    color: "Green",
    ratings: {
      stars: 4.8,
      count: 1320,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "SpotlessGleam Window Squeegee",
    description:
      "Achieve streak-free windows with this high-quality window squeegee.",
    price: 11.99,
    color: "Blue",
    ratings: {
      stars: 4.6,
      count: 1001,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "CleanMaster Power Vacuum Cleaner",
    description:
      "Keep your home spotless with this powerful and versatile vacuum cleaner.",
    price: 129.99,
    color: "Red",
    ratings: {
      stars: 4.7,
      count: 1765,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "FreshAir Fabric Refresher Spray",
    description:
      "Eliminate odors and freshen up your fabrics with this effective refresher spray.",
    price: 8.99,
    color: "White",
    discounted_price: 6.99,
    ratings: {
      stars: 4.5,
      count: 907,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "ShineGuard Stainless Steel Cleaner",
    description:
      "Restore the shine of your stainless steel surfaces with this powerful cleaner.",
    price: 11.99,
    color: "White",
    ratings: {
      stars: 4.4,
      count: 840,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "GrimeBuster Heavy-Duty Gloves (Pair)",
    description:
      "Protect your hands while tackling tough cleaning tasks with these durable gloves.",
    price: 9.99,
    color: "Yellow",
    discounted_price: 7.99,
    ratings: {
      stars: 4.7,
      count: 1065,
    },
  },
  {
    category: "cleaning",
    image: "https://placehold.co/250x350",
    name: "CrystalClear Window Cleaning Kit",
    description:
      "Achieve crystal-clear windows with this complete window cleaning kit.",
    price: 27.99,
    color: "White",
    ratings: {
      stars: 4.6,
      count: 1287,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "ProCraft Deluxe Tool Kit",
    description:
      "A comprehensive DIY tool kit to tackle any home improvement project.",
    price: 79.99,
    color: "Red",
    ratings: {
      stars: 4.9,
      count: 2406,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "WoodWiz Woodworking Set",
    description: "Unleash your creativity with this complete woodworking set.",
    price: 149.99,
    color: "Brown",
    discounted_price: 129.99,
    ratings: {
      stars: 4.8,
      count: 1807,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "PowerPro Electric Drill",
    description: "A high-performance electric drill for all your DIY projects.",
    price: 64.99,
    color: "Yellow",
    ratings: {
      stars: 4.6,
      count: 1422,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "CraftMaster Sewing Machine",
    description:
      "Sew, mend, and create with this versatile and user-friendly sewing machine.",
    price: 129.99,
    color: "White",
    ratings: {
      stars: 4.7,
      count: 1580,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "FixItFast Home Repair Book",
    description:
      "Learn how to tackle common household repairs with this comprehensive guide.",
    price: 19.99,
    color: "Brown",
    ratings: {
      stars: 4.5,
      count: 712,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "SparkPlug Electric Soldering Iron Kit",
    description: "Ideal for electronics and DIY soldering projects.",
    price: 24.99,
    color: "Blue",
    ratings: {
      stars: 4.4,
      count: 876,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "HomeCrafty Embroidery Starter Kit",
    description: "Get started with embroidery and create beautiful designs.",
    price: 17.99,
    color: "Gray",
    ratings: {
      stars: 4.6,
      count: 1098,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "WeldMaster Welding Helmet",
    description:
      "Protect your eyes while welding with this durable and safe welding helmet.",
    price: 39.99,
    color: "Black",
    ratings: {
      stars: 4.8,
      count: 1267,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "ProMechanix Mechanics Tool Set",
    description:
      "A comprehensive set of tools for automotive and mechanical projects.",
    price: 89.99,
    color: "Stainless Steel",
    discounted_price: 74.99,
    ratings: {
      stars: 4.7,
      count: 1689,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "HomeGrow Indoor Herb Garden Kit",
    description:
      "Grow fresh herbs all year round with this easy-to-use indoor garden kit.",
    price: 34.99,
    color: "White",
    ratings: {
      stars: 4.5,
      count: 1522,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "PrecisionCut Rotary Cutter Set",
    description:
      "Cut fabric and paper with precision using this rotary cutter set.",
    price: 18.99,
    color: "Blue",
    ratings: {
      stars: 4.6,
      count: 1325,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "MasterCraft Power Paint Sprayer",
    description:
      "Achieve professional-quality paint jobs with this efficient paint sprayer.",
    price: 69.99,
    color: "Yellow",
    ratings: {
      stars: 4.7,
      count: 1790,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "HomeFixIt 150-Piece Hardware Kit",
    description:
      "A comprehensive assortment of hardware essentials for various projects.",
    price: 27.99,
    color: "Gray",
    ratings: {
      stars: 4.8,
      count: 1467,
    },
  },
  {
    category: "diy",
    image: "https://placehold.co/250x350",
    name: "EasyMend Leather Repair Kit",
    description:
      "Repair scratches and tears on leather items with this easy-to-use kit.",
    price: 14.99,
    color: "Brown",
    ratings: {
      stars: 4.5,
      count: 1135,
    },
  },
];

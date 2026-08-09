require('dotenv').config();
const SizeGuideModel = require('./models/sizeGuideModel');

const seedGuides = async () => {
  const menGuide = {
    title: "Men's Apparel",
    columns: ["Size", "Chest (in)", "Waist (in)", "Hip (in)"],
    rows: [
      ["S", "34-36", "28-30", "34-36"],
      ["M", "38-40", "32-34", "38-40"],
      ["L", "42-44", "36-38", "42-44"],
      ["XL", "46-48", "40-42", "46-48"],
      ["XXL", "50-52", "44-46", "50-52"]
    ],
    sort_order: 1,
    active: true
  };

  const womenGuide = {
    title: "Women's Apparel",
    columns: ["Size", "Bust (in)", "Waist (in)", "Hip (in)"],
    rows: [
      ["XS", "31-32", "24-25", "33-34"],
      ["S", "33-35", "26-28", "35-37"],
      ["M", "36-38", "29-31", "38-40"],
      ["L", "39-41", "32-34", "41-43"],
      ["XL", "42-44", "35-37", "44-46"]
    ],
    sort_order: 2,
    active: true
  };

  try {
    await SizeGuideModel.create(menGuide);
    console.log("Seeded Men's Apparel");
    
    await SizeGuideModel.create(womenGuide);
    console.log("Seeded Women's Apparel");
    
    process.exit(0);
  } catch (err) {
    console.error("Failed to seed:", err);
    process.exit(1);
  }
};

seedGuides();

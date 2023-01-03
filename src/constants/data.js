import images from './images';

const appetizers = [
  {
    title: 'Pho Grilled Cheese',
    price: '$10',
    tags: 'Beef, caramelized onions, cheese with a shot of pho broth',
  },
  {
    title: 'Crispy Chicken Chips',
    price: '$10',
    tags: 'Includes a jalapeno cream cheese dip',
  },
  {
    title: 'Soft Tofu',
    price: '$12',
    tags: 'Scallion, ginger oil, youtiao, sweet soy',
  },
  {
    title: 'Tuna Tataki',
    price: '$11',
    tags: 'Seared tuna, citrus sesame sauce, chili oil',
  },
  {
    title: 'Spring Roll',
    price: '$10',
    tags: 'Vegetarian, crab & taro, chicken',
  },
];

const mains = [
  {
    title: 'Beef Carpaccio - Bo Tai Chanh',
    price: '$20',
    tags: 'Rare ribeye, fresh herbs, onions, quail egg, crispy shallots, spicy lime chili vinaigretter',
  },
  {
    title: "Banh Mi",
    price: '$16',
    tags: 'Cilantro, cucumber, pickled carrot & daikon, chili, and a meat of your choice',
  },
  {
    title: 'Chicken Curry Pho',
    price: '$22',
    tags: 'Rice noodle, aromatic coconut curry, chicken, potatoes, carrots',
  },
  {
    title: 'Oxtail Stew',
    price: '$25',
    tags: 'Rice noodle, braised oxtail and brisket, potatoes, carrots',
  },
  {
    title: 'Spicy Salmon Tacos',
    price: '$18',
    tags: 'Chili aioli, tobiko, wonton shell, avocado',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'This award is given by the Michelin Guide to restaurants that offer high-quality food at an affordable price (less than $40 for a three-course meal).',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'This award is given to up-and-coming restaurants or chefs that show exceptional promise in the culinary world.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'This award recognizes restaurants that offer exceptional hospitality in all areas, including food, service, and ambiance.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'This award honors chefs who have made a significant impact on the culinary world through their contributions and culinary achievements.',
  },
];

export default { appetizers, mains, awards };

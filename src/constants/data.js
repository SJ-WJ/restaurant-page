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
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { appetizers, mains, awards };

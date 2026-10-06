// Fictional demo data for the VERELI portfolio project.
// All dishes, prices, descriptions, images, team members, and testimonials
// are for demonstration only and do not represent a real business.

export const featuredDishes = [
  {
    id: 1,
    name: 'Signature Jollof Rice',
    description: 'Slow-simmered rice in a rich tomato-pepper sauce, served with grilled chicken and fried plantain.',
    price: '₦4,500',
    priceValue: 4500,
    image: 'https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of flavorful Nigerian jollof rice with grilled chicken skewers and roasted fish.',
  },
  {
    id: 2,
    name: 'Suya Skewers',
    description: 'Char-grilled beef skewers rubbed with a smoky, nutty spice blend. Served with fresh onions and tomatoes.',
    price: '₦3,800',
    priceValue: 3800,
    image: 'https://images.pexels.com/photos/29244071/pexels-photo-29244071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of sizzling grilled meat skewers on a barbecue grill outdoors.',
  },
  {
    id: 3,
    name: 'Crispy Chicken & Chips',
    description: 'Golden, crunch-coated fried chicken with seasoned potato chips and a house dipping sauce.',
    price: '₦4,200',
    priceValue: 4200,
    image: 'https://images.pexels.com/photos/14994659/pexels-photo-14994659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Savory fried chicken and crispy chips served in a basket on a wooden table, top view.',
  },
  {
    id: 4,
    name: 'Golden Fried Rice',
    description: 'Wok-tossed fried rice with vegetables, egg, and a choice of chicken or shrimp. Lightly spiced.',
    price: '₦3,500',
    priceValue: 3500,
    image: 'https://images.pexels.com/photos/34683317/pexels-photo-34683317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Appetizing shrimp fried rice with cucumbers in a bowl on wooden table.',
  },
  {
    id: 5,
    name: 'Classic Pepper Soup',
    description: 'Aromatic pepper soup with catfish, infused with local herbs and warm spices. Comfort in a bowl.',
    price: '₦4,000',
    priceValue: 4000,
    image: 'https://images.pexels.com/photos/20943923/pexels-photo-20943923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A vibrant bowl of spicy tomato soup garnished with herbs and peppers on a wooden board.',
  },
  {
    id: 6,
    name: 'VERELI Signature Bowl',
    description: 'Grilled chicken, roasted vegetables, and spiced grains on a bed of fresh greens. Wholesome and satisfying.',
    price: '₦5,200',
    priceValue: 5200,
    image: 'https://images.pexels.com/photos/38499050/pexels-photo-38499050.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Top view of four healthy grain and vegetable bowls on a wooden table, perfect for nutritious meal ideas.',
  },
];

export const menuCategories = [
  {
    id: 'starters',
    label: 'Starters',
    dishes: [
      {
        id: 's1',
        name: 'Peppered Gizzards',
        description: 'Sautéed gizzards in a smoky pepper sauce with onions.',
        price: '₦2,500',
        priceValue: 2500,
        image: 'https://images.pexels.com/photos/36934956/pexels-photo-36934956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Delicious grilled beef with peppers and tomatoes in a hot skillet on wooden table.',
      },
      {
        id: 's2',
        name: 'Plantain Bites',
        description: 'Crispy fried plantain served with a house dipping sauce.',
        price: '₦1,800',
        priceValue: 1800,
        image: 'https://images.pexels.com/photos/27556971/pexels-photo-27556971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of crispy fried plantains served on a white plate.',
      },
      {
        id: 's3',
        name: 'Spring Rolls',
        description: 'Golden, crispy rolls filled with seasoned vegetables.',
        price: '₦2,200',
        priceValue: 2200,
        image: 'https://images.pexels.com/photos/38947729/pexels-photo-38947729.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'A plate of golden crispy spring rolls served on a decorative floral dish.',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    dishes: [
      {
        id: 'm1',
        name: 'Signature Jollof Rice',
        description: 'Slow-simmered rice in a rich tomato-pepper sauce with grilled chicken.',
        price: '₦4,500',
        priceValue: 4500,
        image: 'https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of flavorful Nigerian jollof rice with grilled chicken skewers and roasted fish.',
      },
      {
        id: 'm2',
        name: 'Golden Fried Rice',
        description: 'Wok-tossed fried rice with vegetables, egg, and chicken.',
        price: '₦3,500',
        priceValue: 3500,
        image: 'https://images.pexels.com/photos/34683317/pexels-photo-34683317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Appetizing shrimp fried rice with cucumbers in a bowl on wooden table.',
      },
      {
        id: 'm3',
        name: 'Assorted Fried Rice',
        description: 'Mixed proteins — chicken, shrimp, and beef — with spiced fried rice.',
        price: '₦4,800',
        priceValue: 4800,
        image: 'https://images.pexels.com/photos/7986366/pexels-photo-7986366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'A vibrant Asian fusion dish with fried rice, glazed chicken, and fresh vegetables.',
      },
    ],
  },
  {
    id: 'grill',
    label: 'Grill',
    dishes: [
      {
        id: 'g1',
        name: 'Suya Skewers',
        description: 'Char-grilled beef skewers with a smoky, nutty spice rub.',
        price: '₦3,800',
        priceValue: 3800,
        image: 'https://images.pexels.com/photos/29244071/pexels-photo-29244071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of sizzling grilled meat skewers on a barbecue grill outdoors.',
      },
      {
        id: 'g2',
        name: 'Grilled Tilapia',
        description: 'Whole grilled tilapia with pepper sauce and fresh herbs.',
        price: '₦5,500',
        priceValue: 5500,
        image: 'https://images.pexels.com/photos/36378583/pexels-photo-36378583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Grilled whole fish garnished with fresh thyme on a white platter.',
      },
      {
        id: 'g3',
        name: 'BBQ Ribs',
        description: 'Slow-cooked ribs glazed with a tangy house barbecue sauce.',
        price: '₦6,200',
        priceValue: 6200,
        image: 'https://images.pexels.com/photos/28996259/pexels-photo-28996259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Tasty BBQ ribs with roasted potatoes and green pepper on a white plate.',
      },
    ],
  },
  {
    id: 'soups',
    label: 'Soups',
    dishes: [
      {
        id: 'sp1',
        name: 'Classic Pepper Soup',
        description: 'Aromatic catfish pepper soup infused with local herbs and warm spices.',
        price: '₦4,000',
        priceValue: 4000,
        image: 'https://images.pexels.com/photos/20943923/pexels-photo-20943923.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'A vibrant bowl of spicy tomato soup garnished with herbs and peppers on a wooden board.',
      },
      {
        id: 'sp2',
        name: 'Egusi Soup',
        description: 'Rich melon seed soup with assorted meat and leafy greens.',
        price: '₦4,500',
        priceValue: 4500,
        image: 'https://images.pexels.com/photos/15514359/pexels-photo-15514359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Delicious homemade spicy tomato soup with shellfish, presented in a white bowl.',
      },
      {
        id: 'sp3',
        name: 'Banga Soup',
        description: 'Palm fruit soup with seafood and traditional spices.',
        price: '₦4,800',
        priceValue: 4800,
        image: 'https://images.pexels.com/photos/7491902/pexels-photo-7491902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Rich tomato seafood soup with mussels served with a croissant on a white table setting.',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    dishes: [
      {
        id: 'd1',
        name: 'Hibiscus Cooler',
        description: 'Chilled zobo (hibiscus) tea with a hint of ginger.',
        price: '₦1,200',
        priceValue: 1200,
        image: 'https://images.pexels.com/photos/33284162/pexels-photo-33284162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of a refreshing, iced hibiscus tea in a clear glass mug.',
      },
      {
        id: 'd2',
        name: 'Fresh Limeade',
        description: 'Freshly squeezed lime over ice with a touch of mint.',
        price: '₦1,000',
        priceValue: 1000,
        image: 'https://images.pexels.com/photos/8679351/pexels-photo-8679351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of a refreshing lime drink in a glass with fresh limes.',
      },
      {
        id: 'd3',
        name: 'Mango Smoothie',
        description: 'Blended fresh mango with yogurt and a touch of honey.',
        price: '₦1,500',
        priceValue: 1500,
        image: 'https://images.pexels.com/photos/17612822/pexels-photo-17612822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Vibrant mango smoothie served in a glass, perfect for a healthy refreshment.',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    dishes: [
      {
        id: 'ds1',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with ice cream.',
        price: '₦2,800',
        priceValue: 2800,
        image: 'https://images.pexels.com/photos/5638516/pexels-photo-5638516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Mouthwatering chocolate lava cake served with ice cream and artistic sauce drizzle.',
      },
      {
        id: 'ds2',
        name: 'Puff Puff Sundae',
        description: 'Fried dough balls served with vanilla ice cream and chocolate drizzle.',
        price: '₦2,500',
        priceValue: 2500,
        image: 'https://images.pexels.com/photos/13915068/pexels-photo-13915068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Mouthwatering Nigerian puff puff in a white ceramic bowl, ready to eat.',
      },
      {
        id: 'ds3',
        name: 'Fresh Fruit Plate',
        description: 'Seasonal fresh fruits with a light honey drizzle.',
        price: '₦2,000',
        priceValue: 2000,
        image: 'https://images.pexels.com/photos/8805092/pexels-photo-8805092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        alt: 'Close-up of a fresh fruit salad with a honey drizzle being added.',
      },
    ],
  },
];

// Flatten all menu items for the order page
export const allMenuItems = menuCategories.flatMap((cat) =>
  cat.dishes.map((dish) => ({ ...dish, category: cat.label }))
);

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Luxurious gourmet meal elegantly plated with vegetables and sauce.', category: 'Food', span: 'tall' },
  { src: 'https://images.pexels.com/photos/32568165/pexels-photo-32568165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant indoor restaurant setting with wooden furniture and warm lighting.', category: 'Interior', span: 'wide' },
  { src: 'https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two male chefs in aprons cook attentively in a contemporary open kitchen setting.', category: 'Chef', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1343954/pexels-photo-1343954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A top view of fresh carrots and various spices on a dark background for a cooking concept.', category: 'Ingredients', span: 'normal' },
  { src: 'https://images.pexels.com/photos/9961871/pexels-photo-9961871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Group of friends laughing and eating at a restaurant, enjoying leisure time.', category: 'Dining', span: 'wide' },
  { src: 'https://images.pexels.com/photos/15689896/pexels-photo-15689896.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A chef is preparing food in a dimly lit kitchen, focused on presentation.', category: 'Chef', span: 'tall' },
  { src: 'https://images.pexels.com/photos/12775025/pexels-photo-12775025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Close-up of elegant white plates with gourmet canapés.', category: 'Food', span: 'normal' },
  { src: 'https://images.pexels.com/photos/28575445/pexels-photo-28575445.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Warm and inviting restaurant setting with elegant leather seating and table setting.', category: 'Interior', span: 'normal' },
  { src: 'https://images.pexels.com/photos/12181763/pexels-photo-12181763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A sophisticated indoor wine setting with glasses, a bottle, and warm lighting.', category: 'Interior', span: 'wide' },
  { src: 'https://images.pexels.com/photos/8629083/pexels-photo-8629083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: "Chef's hand preparing chopped green vegetables on a cutting board in a kitchen.", category: 'Ingredients', span: 'normal' },
  { src: 'https://images.pexels.com/photos/15671380/pexels-photo-15671380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A chef grates parmesan over beautifully arranged plates in a high-end restaurant kitchen.', category: 'Chef', span: 'tall' },
  { src: 'https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Various appetizing dishes served on white plates and glasses of wine on a wooden table in a modern light restaurant.', category: 'Dining', span: 'normal' },
];

export const galleryCategories = ['All', 'Food', 'Interior', 'Chef', 'Ingredients', 'Dining'];

// Fictional testimonials — these are demo reviews, not real customer feedback.
export const testimonials = [
  {
    quote: 'The food was beautifully presented and full of flavor. VERELI feels like the kind of place you want to return to.',
    author: 'Fictional customer',
    role: 'Demo testimonial',
  },
  {
    quote: 'From the jollof to the suya, every dish tasted thoughtfully made. The atmosphere made the evening feel special.',
    author: 'Fictional customer',
    role: 'Demo testimonial',
  },
  {
    quote: 'Warm service, generous portions, and a space that feels both modern and welcoming. A great spot to gather.',
    author: 'Fictional customer',
    role: 'Demo testimonial',
  },
];

// Fictional team members — demo content only.
export const team = [
  {
    name: 'Chef Adaeze Okoro',
    role: 'Head Chef & Founder',
    bio: 'Adaeze founded VERELI with a vision to bring global flavors together under one roof. With over fifteen years in kitchens across three continents, she leads the kitchen with a focus on fresh ingredients and thoughtful preparation.',
    image: 'https://images.pexels.com/photos/16849843/pexels-photo-16849843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Portrait of a female chef in a kitchen wearing apron and hat.',
  },
  {
    name: 'Chef Tunde Bakare',
    role: 'Grill & Suya Specialist',
    bio: 'Tunde brings the fire — literally. His mastery of open-flame grilling and traditional suya spice blends gives VERELI its signature smoky character.',
    image: 'https://images.pexels.com/photos/36430160/pexels-photo-36430160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Confident chef with tattoos and cap in a bustling kitchen scene.',
  },
  {
    name: 'Chef Maria Santos',
    role: 'Pastry & Desserts',
    bio: 'Maria creates the sweet finish to every VERELI meal. Her desserts blend classic technique with local ingredients for something familiar yet surprising.',
    image: 'https://images.pexels.com/photos/4920548/pexels-photo-4920548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'A smiling woman in an apron preparing food in a modern kitchen setting.',
  },
];

export const businessInfo = {
  address: '24 Meridian Avenue, Central District',
  phone: '+234 800 000 0000',
  whatsapp: '+2348000000000',
  email: 'hello@vereli-demo.com',
  hours: [
    { days: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
    { days: 'Friday – Saturday', time: '11:00 AM – 11:30 PM' },
    { days: 'Sunday', time: '12:00 PM – 9:00 PM' },
  ],
};

// Placeholder WhatsApp link — VERELI is a fictional brand.
export const whatsappLink = `https://wa.me/2348000000000?text=${encodeURIComponent('Hello VERELI, I would like to place an order.')}`;
export const phoneLink = 'tel:+2348000000000';
export const emailLink = 'mailto:hello@vereli-demo.com';
export const directionsLink = 'https://www.google.com/maps/search/?api=1&query=24+Meridian+Avenue+Central+District';

export const formatNaira = (value) => `₦${value.toLocaleString('en-NG')}`;

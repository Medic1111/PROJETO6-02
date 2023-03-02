const mockProducts = [
  {
    title: "Falafel Joy",
    price: 55,
    description:
      "Half pound of gnarliness. Fresh tomatoes and in-house grown fresh basil. Amazing Mozzarella on the finest dough.",
    url: "https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    stock_count: 31,
    label: ["vegan"],
    nutritional_facts: {
      calories: 789,
      carbs: 78,
      protein: 112,
      fat: 4,
    },
  },
  {
    title: "Three in One",
    price: 65,
    description:
      "Fluffy and soft and delicious. No more to say. Oh wait, There is. Fresh fruit on top.",
    url: "https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    stock_count: 19,
    label: ["standard"],
    nutritional_facts: {
      calories: 1689,
      carbs: 118,
      protein: 189,
      fat: 30,
    },
  },
  {
    title: "Junior Bun",
    price: 55,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    stock_count: 22,
    label: ["standard"],
    nutritional_facts: {
      calories: 689,
      carbs: 60,
      protein: 92,
      fat: 10,
    },
  },
  {
    title: "Cave man",
    price: 55,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1521305916504-4a1121188589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyJTIwcGF0dHl8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    stock_count: 9,
    label: ["paleo", "keto"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },

  {
    title: "Greeny Phat",
    price: 46,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1633204339691-9d3645430e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2b2NhZG8lMjB0b2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 8,
    label: ["keto"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  {
    title: "Stone Age",
    price: 65,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1590872249887-0048c480ce94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lYXQlMjBzYW5kd2ljaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 16,
    label: ["paleo"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  {
    title: "Bacon Fiesta",
    price: 55,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG1lYXQlMjBzYW5kd2ljaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    stock_count: 22,
    label: ["standard"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  // 9
  {
    title: "Family Dine",
    price: 115,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1676300185026-81a05335809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG1lYXQlMjBzYW5kd2ljaHxlbnwwfDB8MHx8&auto=format&fit=crop&w=1400&q=60",
    stock_count: 22,
    label: ["standard"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  {
    title: "Tofu Mania",
    price: 62,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1cmdlciUyMHBhdHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 12,
    label: ["vegan"],
    nutritional_facts: {
      calories: 672,
      carbs: 26,
      protein: 52,
      fat: 15,
    },
  },
  {
    title: "Bacon Melt",
    price: 55,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1569159316006-900e88b5dbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2V0byUyMHNhbmR3aWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 22,
    label: ["keto"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  {
    title: "Power Vego",
    price: 65,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1626414375188-805f321bd821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZ2FuJTIwc2FuZHdpY2h8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 22,
    label: ["vegan"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
  {
    title: "Deli Cious",
    price: 65,
    description:
      "Sweet and sour, home made secret formula source on this wonderful chicken lovers favourite.",
    url: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F2ZW1hbiUyMHNhbmR3aWNofGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 22,
    label: ["paleo"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
];

const mockUsers = [
  {
    username: "mockUser",
    password: "12345678",
    email: "mockuser@mock.com",
    phone_number: 7864567364,
  },
  {
    username: "testUser",
    password: "12345678",
    email: "testuser@mock.com",
    phone_number: 7864567364,
  },
  {
    username: "seedUser",
    password: "12345678",
    email: "seeduser@mock.com",
    phone_number: 7864567364,
  },
];

module.exports = { mockProducts, mockUsers };

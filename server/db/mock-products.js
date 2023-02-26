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
    url: "https://images.unsplash.com/photo-1623669673892-2337506e6850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBhdHR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    stock_count: 12,
    label: ["paleo", "keto"],
    nutritional_facts: {
      calories: 802,
      carbs: 12,
      protein: 192,
      fat: 25,
    },
  },
];

module.exports = { mockProducts };

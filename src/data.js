const backendData = [
  {
    id: "1",
    name: "Shopping List"
  },
  {
    id: "2",
    name: "Meals",
    children: [
      {
        id: "8",
        name: "Thai Peanut Chicken Noodles"
      },
      {
        id: "9",
        name: "Spaghetti Bolognese"
      }
    ]
  },
  {
    id: "3",
    name: "Snacks",
    children: [
      {
        id: "6",
        name: "Canned Goods",
        children: [
          {
            id: "10",
            name: "Tuna"
          },
          {
            id: "11",
            name: "Baked Beans"
          },
          {
            id: "12",
            name: "Smoked Salmon"
          }
        ]
      },
      {
        id: "7",
        name: "Fresh Fruit",
        children: [
          {
            id: "13",
            name: "Kiwi Fruit"
          },
          {
            id: "14",
            name: "Mango"
          }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Condiments",
    children: [
      {
        id: "15",
        name: "Tomato Sauce"
      }
      ]
  },
  {
    id: "5",
    name: "Dairy",
    children: [
      {
        id: "16",
        name: "Milk"
      }
    ]
  },
];

export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100, backendData);
  });
}

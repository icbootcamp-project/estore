var data = {
  category: [
    {
      id: 1,
      name: food,
      subcategories: [
        {
          id: 's1',
          name: 'fresh',
          products: [
            {
              id: 'p1',
              name: 'bread',
              desc: 'some',
              brand: 'local',
              size: '',
              price: '',
              discount: '',
              images: [],
              quantity: 4
            },
            {
              id: 's2',
              name: 'discounts',
              products: [
                {
                  id: 'p1'
                  // rest of the object
                }
              ]
            }
          ]
        },
        {}
      ]
    },
    {
      id: 2,
      name: toileteries
    }
  ]
};

// ================================

var data = {
  categories: [
    {
      id: 1,
      name: food,
      subcategories: ['s1', 's2']
    }
  ],
  subcategories: [
    {
      id: 's1',
      name: 'fresh',
      products: ['p1']
    }
  ],
  products: [
    {
      id: 'p1',
      name: 'bread',
      desc: 'some',
      brand: 'local',
      size: '',
      price: '',
      discount: '',
      images: [],
      quantity: 4
    }
  ]
};

// selector = state.fullname

// memoization:

// function fullname('mr', 'yasser', 'mahmud') = 'Mr Yasser Mahmud'

//Normalizing products

var products: {
  p1: {
    id: 'p1',
    name: 'bread',
    desc: 'some',
    brand: 'local',
    size: '',
    price: '',
    discount: '',
    images: [],
    quantity: 4
  },
  p2: {
    id: 'p1',
    name: 'bread',
    desc: 'some',
    brand: 'local',
    size: '',
    price: '',
    discount: '',
    images: [],
    quantity: 4
  }
};

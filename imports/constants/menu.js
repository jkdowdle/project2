const pizzaToppings = [
      'pepperoni',
      'canadian bacon',
      'sausage',
      'hambuger',
      'bacon',
      'chicken',
      'green bell pepper',
      'yellow onion',
      'black olives',
      'mushrooms',
      'pineapple',
      'tomatoes'
    ],
      pizzaSizes = {
        sm: [3.89, 4.29, 4.69, 5.09, 5.49, 5.99],
        md: [8.69, 9.29, 9.89, 10.49, 11.09, 11.99],
        lg: [10.99, 11.89, 12.79, 13.69, 14.59, 14.99],
        xlg: [13.39, 14.49, 15.59, 16.69, 17.79, 17.99]
      },
      comboIncludes = [
        'pepperoni',
        'canadian bacon',
        'sausage',
        'hambuger',
        'green bell pepper',
        'yellow onion',
        'black olives',
        'mushrooms',
        'pineapple'
      ],
      pizzaSpecialties = {
        types: ['check bacon ranch', 'BBQ chicken bacon', 'buffalow chicken'],
        prices: [5.99, 11.99, 14.99, 17.99]
      },
      buffetArr = ['With a Drink - $6.49','With Out a Drink - $5.49','Kids Buffet - $0.50 Per Year'],
      stixSauces = ['ranch', 'marinara', 'frosting'],
      stixTypes = {
        reg: { name: 'Bread Stix', price: 2.99 },
        cin: { name: 'Cinnamon Stix', price: 2.99 },
        che: { name: 'Cheese Stix', price: 4.69 },
        pep: { name: 'Pepperoni Stix', price: 5.19 }
      },
      calzoneSizes = {
        half: { name: 'half', price: 5.99 },
        whole: { name: 'whole', price: 7.99 }
      },
      saladbarArr = ['All You Can Eat with Bread Stix - $6.49', 'One Time Through with 2 Bread Stix - $4.99'],
      saladReg = {
        sm: { name: 'small', basic: 3.99, custom: 4.99 },
        lg: { name: 'large', basic: 4.99, custom: 6.49 }
      },
      saladDressing = ['ranch', 'thousand island', 'italian'],
      sodaList = [ 'Coke', 'Diet Coke', 'Sprite', 'Cherry Coke','Root Beer', 'Orange Fanta', 'Squirt' ],
      sodaSizes = {
        md: { name: 'medium', price: 1.49 },
        lg: { name: 'large', price: 1.79 },
        tl: { name: 'two-liter', price: 2.49 }
      };



const menu = {
  pizza: {
    toppings: pizzaToppings,
    sizes: pizzaSizes,
    comboHas: comboIncludes,
    specialties: pizzaSpecialties
  },
  buffet: buffetArr,
  stix: {
    sauces: stixSauces,
    types: stixTypes
  },
  calzone: calzoneSizes,
  salad: {
    barOptions: saladbarArr,
    salad: saladReg,
    dressing: saladDressing
  },
  soda: {
    types: sodaList,
    sizes: sodaSizes
  }
};

export default menu;

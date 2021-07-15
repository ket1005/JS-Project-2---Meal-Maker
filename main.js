const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    addDishToCourse( courseName, dishName, dishPrice ) {
      dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push( dish );
    },
    getRandomDishFromCourse: function( courseName ) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor( Math.random() * dishes.length );
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse( 'appetizers' );
      const main = this.getRandomDishFromCourse( 'mains' );
      const dessert = this.getRandomDishFromCourse( 'desserts' );
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
    },
    get courses() {
      return Object.entries( this._courses );
    },
    get appetizers() {
        return this._courses.appetizers;
      },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set appetizers( appetizerIn ) {
      this._courses.appetizers = appetizerIn;
    },
    set mains( mainsIn ) {
      this._courses.mains = mainsIn;
    },
    set desserts( dessertsIn ) {
      this._courses.desserts = dessertsIn;
    } 
  };
  
  menu.addDishToCourse( 'appetizers', ' Chili Cheese Dip', 27.5 );
  menu.addDishToCourse( 'appetizers', 'Anitpasti Bites', 6.63 );
  menu.addDishToCourse( 'appetizers', 'Crab Rangoon Dip', 15.65 );
  
  menu.addDishToCourse( 'mains', ' Pizza', 44.85 );
  menu.addDishToCourse( 'mains', 'American Burger', 26.75 );
  menu.addDishToCourse( 'mains', 'Lazania', 32.26 );
  
  menu.addDishToCourse( 'desserts', 'Ice cream', 19.29 );
  menu.addDishToCourse( 'desserts', 'Macarons', 25.75 );
  menu.addDishToCourse( 'desserts', 'Cheesecake', 19.55 );
  
  const meal = menu.generateRandomMeal();
  console.log( meal );
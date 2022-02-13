let cart = [new Product('Bread', 'food', false, 1),
new Product('Milk', 'drink', false, 1.50),
new Product('Bananas', 'food', true, 2.50),
new Product('Water', 'drink', true, 1),
new Product('Cheese', 'food', false, 4),
new Product('Milka', 'food', true, 2.60),
new Product('Ice Cream', 'food', true, 10),
new Product('Nutella', 'food', true, 15),
new Product('Smoki', 'food', false, 5),
new Product('Skopsko', 'alcoholic drink', false, 18),
new Product('Jack Daniels', 'alcoholic drink', false, 35),
new Product('Tikves', 'alcoholic drink', false, 25),
new Product('Nivea', 'skincare', true, 30),
new Product('Paco Rabanne', 'perfume', false, 50),
new Product('Marlboro', 'cigarettes', false, 21),]

function Product(fName, category, discount, price){
    this.name = fName;
    this.category = category;
    this.hasDiscount = discount;
    this.price = price;
}
function sumPrice(sum, price){
    return sum += price;
}

let priceAbove20 = cart.filter(p => p.price > 20);
console.log('Items with price above 20:'); console.log(priceAbove20); console.log('\n');

let onDiscount = cart.filter(f => f.category == 'food').filter(d => d.hasDiscount == true);
console.log('Food items on discount:'); console.log(onDiscount); console.log('\n');

let avgPrice = cart.filter(d => d.hasDiscount == true).map(p => p.price);;
console.log('Average price on discounted items:'); console.log(avgPrice.reduce(sumPrice, 0)); console.log('\n');

let startsWithVowl = cart.filter(d => d.hasDiscount == false);
console.log(`First letter and price from all the items NOT on discount:`);
startsWithVowl.map(item => console.log(`${item.name.charAt(0)} - ${item.price}$`)); console.log('\n');

let cartCopy = [];
cart.forEach(item => cartCopy.push(item));
console.log('Sorted by ascending order:'); console.log(cartCopy.sort((i1, i2) => i1.price - i2.price));
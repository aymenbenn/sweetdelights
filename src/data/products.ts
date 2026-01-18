export type Product = {
  id: string;
  name: string;
  category: 'Desserts' | 'Ice Cream' | 'Chocolate' | 'Gift Boxes';
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  calories?: number;
};
export const products: Product[] = [
// Desserts
{
  id: 'd1',
  name: 'Molten Chocolate Lava Cake',
  category: 'Desserts',
  price: 8.99,
  description: 'Rich dark chocolate cake with a warm, flowing center. Served with a dusting of cocoa powder.',
  image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800',
  featured: true,
  calories: 450
}, {
  id: 'd2',
  name: 'Classic Tiramisu',
  category: 'Desserts',
  price: 7.99,
  description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
  image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
  featured: true,
  calories: 380
}, {
  id: 'd3',
  name: 'Vanilla Bean Crème Brûlée',
  category: 'Desserts',
  price: 6.99,
  description: 'Silky vanilla custard topped with a contrasting layer of hard caramel.',
  image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=800',
  calories: 320
}, {
  id: 'd4',
  name: 'Fresh Fruit Tart',
  category: 'Desserts',
  price: 9.99,
  description: 'Buttery pastry shell filled with vanilla pastry cream and topped with seasonal fresh fruits.',
  image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
  calories: 290
}, {
  id: 'd5',
  name: 'New York Cheesecake',
  category: 'Desserts',
  price: 7.5,
  description: 'Classic creamy cheesecake on a graham cracker crust, served with berry compote.',
  image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800',
  calories: 410
},
// Ice Cream
{
  id: 'i1',
  name: 'Madagascar Vanilla Bean',
  category: 'Ice Cream',
  price: 5.99,
  description: 'Premium ice cream made with real Madagascar vanilla beans for an authentic flavor.',
  image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800',
  featured: true,
  calories: 210
}, {
  id: 'i2',
  name: 'Double Chocolate Fudge',
  category: 'Ice Cream',
  price: 5.99,
  description: 'Decadent chocolate ice cream with swirls of rich fudge sauce.',
  image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800',
  calories: 240
}, {
  id: 'i3',
  name: 'Strawberry Swirl',
  category: 'Ice Cream',
  price: 5.99,
  description: 'Creamy strawberry ice cream made with fresh strawberry puree.',
  image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
  calories: 200
}, {
  id: 'i4',
  name: 'Mint Chocolate Chip',
  category: 'Ice Cream',
  price: 5.99,
  description: 'Refreshing mint ice cream loaded with dark chocolate chips.',
  image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800',
  calories: 230
}, {
  id: 'i5',
  name: 'Salted Caramel',
  category: 'Ice Cream',
  price: 6.99,
  description: 'Sweet and salty caramel ice cream with caramel ribbons.',
  image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
  featured: true,
  calories: 250
},
// Chocolate
{
  id: 'c1',
  name: 'Artisan Dark Chocolate Bar',
  category: 'Chocolate',
  price: 4.99,
  description: '70% cocoa dark chocolate bar with notes of berries and roasted nuts.',
  image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800',
  calories: 180
}, {
  id: 'c2',
  name: 'Milk Chocolate Truffles',
  category: 'Chocolate',
  price: 12.99,
  description: 'Box of 12 handcrafted milk chocolate truffles with smooth ganache centers.',
  image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
  featured: true,
  calories: 80
}, {
  id: 'c3',
  name: 'White Chocolate Selection',
  category: 'Chocolate',
  price: 15.99,
  description: 'Premium white chocolate pieces with dried fruits and nuts.',
  image: 'https://images.unsplash.com/photo-1621939514649-28b12e81658e?auto=format&fit=crop&q=80&w=800',
  calories: 190
}, {
  id: 'c4',
  name: 'Assorted Pralines',
  category: 'Chocolate',
  price: 18.99,
  description: 'Luxury collection of 24 assorted pralines in a gift box.',
  image: 'https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80&w=800',
  calories: 70
},
// Gift Boxes
{
  id: 'g1',
  name: 'Ultimate Dessert Sampler',
  category: 'Gift Boxes',
  price: 29.99,
  description: 'A curated selection of our finest pastries and chocolates.',
  image: 'https://images.unsplash.com/photo-1595052985794-60d998797968?auto=format&fit=crop&q=80&w=800',
  featured: true
}, {
  id: 'g2',
  name: "Chocolate Lover's Box",
  category: 'Gift Boxes',
  price: 34.99,
  description: 'Everything chocolate: bars, truffles, and hot cocoa mix.',
  image: 'https://images.unsplash.com/photo-1606312619070-d48b706521bf?auto=format&fit=crop&q=80&w=800'
}, {
  id: 'g3',
  name: 'Ice Cream Party Pack',
  category: 'Gift Boxes',
  price: 24.99,
  description: '4 pints of our best-selling ice cream flavors plus cones and toppings.',
  image: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&q=80&w=800'
}];
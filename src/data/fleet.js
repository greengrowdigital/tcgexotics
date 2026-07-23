// The fleet. Mock data — realistic NYC-metro rental line-up.
// tag drives filtering: 'Exotic' | 'Luxury' | 'Everyday'
// Rendered fields: name, tag, img, power, zero|mpg, seats, price, badge.

export const CATEGORIES = ['All', 'Exotic', 'Luxury', 'Everyday']

export const FLEET = [
  { id: 'mclaren-570s', name: 'McLaren 570S', tag: 'Exotic', img: 'mclaren', power: '562 HP', zero: '3.1s', seats: 2, price: 1199, badge: 'Signature' },
  { id: 'lamborghini-huracan', name: 'Lamborghini Huracán EVO', tag: 'Exotic', img: 'lambo1', power: '631 HP', zero: '2.9s', seats: 2, price: 1499 },
  { id: 'ferrari-488', name: 'Ferrari 488 Spider', tag: 'Exotic', img: 'ferrariDark', power: '661 HP', zero: '3.0s', seats: 2, price: 1699, badge: 'Rare' },
  { id: 'mercedes-e63', name: 'Mercedes-AMG E63 S', tag: 'Luxury', img: 'mercReflect', power: '603 HP', zero: '3.3s', seats: 5, price: 399 },
  { id: 'bmw-m3', name: 'BMW M3 Competition', tag: 'Luxury', img: 'bmwM3', power: '503 HP', zero: '3.8s', seats: 5, price: 349, badge: 'Popular' },
  { id: 'range-rover-sport', name: 'Range Rover Sport', tag: 'Luxury', img: 'suvRoad', power: '395 HP', zero: '5.5s', seats: 5, price: 429 },
  { id: 'mercedes-s580', name: 'Mercedes-Benz S 580', tag: 'Luxury', img: 'blackBuilding', power: '496 HP', zero: '4.4s', seats: 5, price: 459 },
  { id: 'ford-mustang-gt', name: 'Ford Mustang GT', tag: 'Everyday', img: 'mustangWash', power: '450 HP', zero: '4.2s', seats: 4, price: 159, badge: 'Fun' },
  { id: 'toyota-camry-se', name: 'Toyota Camry SE', tag: 'Everyday', img: 'whiteFord', power: '203 HP', mpg: '39 MPG', seats: 5, price: 89, badge: 'Best value' },
  { id: 'honda-accord', name: 'Honda Accord', tag: 'Everyday', img: 'whiteDriveway', power: '192 HP', mpg: '38 MPG', seats: 5, price: 95 },
]

export const FEATURED_IDS = ['mclaren-570s', 'bmw-m3', 'mercedes-s580', 'toyota-camry-se']

import { Car } from './car.model';

const cars = [
  {
    model: 'E Tron',
    brand: 'Audi',
    maxSpeed: 200,
    maxRange: 400,
    chargeTime: 13.5,
    price: 80.0,
    url: '../../assets/etron.jpg',
    visibility:true
  },
  {
    model: 'Model 3',
    brand: 'Tesla',
    maxSpeed: 300,
    maxRange: 600,
    chargeTime: 3,
    price: 200.0,
    url: '../../assets/model3.jpg',
    visibilty:false
  }
];

export const CARS = cars.map(Car.fromJSON);

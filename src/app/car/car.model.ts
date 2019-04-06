import { Review } from './car-review/review.model';

export class Car {
  constructor(
    private _model: string,
    private _brand: string,
    private _maxSpeed: number,
    private _maxRange: number,
    private _chargeTime: number,
    private _price: number,
    private _image: any,
    private _reviews: Review[],
    private _rating: number,
    private _amountOfRatings: number
  ) {
    this._reviews.map(rev => Review.fromJSON(rev));
  }

  get model(): string {
    return this._model;
  }

  get brand(): string {
    return this._brand;
  }

  get maxSpeed(): number {
    return this._maxSpeed;
  }
  get maxRange(): number {
    return this._maxRange;
  }
  get chargeTime(): number {
    return this._chargeTime;
  }
  get price(): number {
    return this._price;
  }

  get reviews(): Review[] {
    return this._reviews;
  }

  get rating(): number {
    return this._rating;
  }

  get amountOfRatings(): number {
    return this._amountOfRatings;
  }

  get image(): string {
    return this._image;
  }

  static fromJSON(json: any): Car {
    return new Car(
      json.model,
      json.brand,
      json.maxSpeed,
      json.maxRange,
      json.chargeTime,
      json.price,
      json.image,
      json.reviews,
      json.rating,
      json.amountOfRatings
    );
  }
}

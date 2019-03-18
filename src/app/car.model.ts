export class Car {
  private _comments: string[];
  private _rating: number;
  private _amountOfRatings: number;

  constructor(
    private _model: string,
    private _brand: string,
    private _maxSpeed: number,
    private _maxRange: number,
    private _chargeTime: number,
    private _price: number,
    private _imageData: string
  ) {
    this._amountOfRatings = 0;
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

  get comments(): string[] {
    return this._comments;
  }

  get rating(): number {
    return this._rating;
  }

  get amountOfRatings(): number {
    return this._amountOfRatings;
  }

  get imageData(): string {
    return this._imageData;
  }

  addRating(value: number) {
    if (this._amountOfRatings == 0) {
      this._rating = value;
      this._amountOfRatings += 1;
    } else {
      var totalAmounts: number = this._rating * this.amountOfRatings;
      var temp: number = (totalAmounts + value) / (this.amountOfRatings + 1);
      this._rating = temp;
    }
  }

  addComment(comment: string) {
    this._comments.push(comment);
  }

  static fromJSON(json: any): Car {
    return new Car(
      json.model,
      json.brand,
      json.maxSpeed,
      json.maxRange,
      json.chargeTime,
      json.price,
      json.imageData
    );
  }
}

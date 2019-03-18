export class Review {
  constructor(
    private _datePosted: Date,
    private _comment: string,
    private _rating: number,
    private _customerName: string
  ) {}

  get datePosted() {
    return this._datePosted;
  }

  get comment() {
    return this._comment;
  }

  get rating() {
    return this._rating;
  }

  get customerName() {
    return this._customerName;
  }

  static fromJSON(json: any): Review {
    return new Review(
      json.datePosted,
      json.comment,
      json.rating,
      json.customerName
    );
  }
}

export class Review {
  constructor(
    private _comment: string,
    private _rating: number,
    private _customerName: string,
    private _datePosted: Date
  ) {}

  get comment() {
    return this._comment;
  }

  get rating() {
    return this._rating;
  }

  get customerName() {
    return this._customerName;
  }

  get datePosted() {
    return this._datePosted;
  }

  static fromJSON(json: any): Review {
    return new Review(
      json.comment,
      json.rating,
      json.customerName,
      json.datePosted
    );
  }
}

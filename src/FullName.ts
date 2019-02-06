export class FullName {

  constructor(public first: string, public middle: string, public last: string) {

  }

  public toString(): string {
    return this.first + ' ' + this.middle + ' ' + this.last;
  }
}

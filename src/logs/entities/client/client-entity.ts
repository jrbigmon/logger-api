export class Client {
  constructor(
    public type: string,
    public name: string,
    public version: string,
    public engine: string,
    public engineVersion: string,
    public id?: number,
  ) {}
}

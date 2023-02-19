export class Device {
  constructor(
    public type: string,
    public brand: string,
    public model: string,
    public id?: number,
  ) {}
}

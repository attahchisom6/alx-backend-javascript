export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const cloneCar = new Car(
      this._brand,
      this._motor,
      this._color,
    );
    return cloneCar;
  }
}
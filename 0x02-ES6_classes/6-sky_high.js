import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floor) {
    super(sqft);
    this._floor = floor;
  }

  get sqft() {
    return this._sqft;
  }

  get floor() {
    return this.floor;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floor} floors.`;
  }
}

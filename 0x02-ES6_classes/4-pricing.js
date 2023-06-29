import Currency from './3-currency';
const currency = new Currency();

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }
  
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    const amount = this._amount;
    const currency_name = this.currency.name;
    const code = this.currency.code;
    return (amount currency_name (code)).join(' ');
  }
}

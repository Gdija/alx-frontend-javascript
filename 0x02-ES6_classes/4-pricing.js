// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // amount

  get amount() {
    return this._amount;
  }

  set amount(value) {
    return this._amount === value;
  }

  // currency

  get currency() {
    return this._currency;
  }

  set currency(value) {
    return this._currency === value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code}) `;
  }

  // eslint-disable-next-line no-unused-vars
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

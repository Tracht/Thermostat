'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
  };

  incr_temp() {
    this.temp += 1;
  }

  decr_temp() {
    this.temp -= 1;
  }

};

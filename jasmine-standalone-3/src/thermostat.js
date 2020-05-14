'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
  };

  incr_temp() {
    this.temp += 1;
  }

  decr_temp() {
    this.temp -= 1;
  }

};

'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
  };

  incr_temp() {
    this.temp += 1;
  }

  decr_temp() {
    this.temp -= 1;
  }

  // powerSaveOn()
  //   this.MAXTEMP = 25
  //
  // powerSaveOff()
  //   this.MAXTEMP = 32
};

'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
  };

  incr_temp() {
    if (this.temp === this.MAXTEMP) {
     return  "you've reached the maximum temperature"
    }
    this.temp += 1;
  }

  decr_temp() {
    if (this.temp === this.MINTEMP) {
      return "you've reached the minimum temperature"
    }
    this.temp -= 1;
  }

  powerSaveOn() {
    this.MAXTEMP = 25
  }

  powerSaveOff() {
    this.MAXTEMP = 32
  }

  reset_temp() {
    this.temp = 20
  }

  current_energy_usage() {
    if ( this.temp < 18 ) {
       return "low usage"
    } else if ( this.temp >= 25 ) {
        return "high usage"
    } else {
        return "medium usage"
    }
  }

};

'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    // this.energy_usage_level = "medium usage"
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
  };

  incr_temp() {
    if (this.temp === this.MAXTEMP) {
     return  "you've reached max temp"
    }
    this.temp += 1;
  }

  decr_temp() {
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
       // this.energy_usage_level = "low usage";
       return "low usage"
    } else if ( this.temp >= 25 ) {
        // return this.energy_usage_level = "high usage";
        return "high usage"
    } else {
        // return this.energy_usage_level = "medium usage";
        return "medium usage"
    }
  }

};

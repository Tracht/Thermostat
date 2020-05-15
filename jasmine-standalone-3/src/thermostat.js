'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
    this.display = "hello, I'm your thermostat!"
  };

  incrTemp() {
    if (this.temp === this.MAXTEMP) {
     return this.display = "you've reached the maximum temperature"
    }
    this.temp += 1;
  }

  decrTemp() {
    if (this.temp === this.MINTEMP) {
      // return this.display = "you've reached the minimum temperature"
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

  _isPowerSaveOn() {
    if (this.MAXTEMP === 25) {
      return "power saving mode is ON"
    }
    else {
      return "power saving mode is OFF"
    }
  }

  resetTemp() {
    this.temp = 20
  }

  // private method
  _currentEnergyUsage() {
    if ( this.temp < 18 ) {
       // return this.display = "you are at low usage"
       return "low-energy-usage"
    } else if ( this.temp >= 25 ) {
      // return this.display = "you are at high usage"
        return "high-energy-usage"
    } else {
      // return this.display = "you are at medium usage"
        return "medium-energy-usage"
    }
  }

};

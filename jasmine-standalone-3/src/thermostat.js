'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
    this.display = "Temperature (C) is currently at:"
  };

  incrTemp() {
    if (this.temp >= this.MAXTEMP) {
     return this.display = "you've reached the maximum temperature"
    }
    this.display = "Temperature (C) is currently at:"
    this.temp += 1;
  }

  decrTemp() {
    if (this.temp <= this.MINTEMP) {
      return this.display = "you've reached the lowest temperature"
    }
    this.display = "Temperature (C) is currently at:"
    this.temp -= 1;
  }

  powerSaveOn() {
    this.MAXTEMP = 25
  }

  powerSaveOff() {
    this.MAXTEMP = 32
  }

  resetTemp() {
    this.temp = 20
  }

  // private method
  _isPowerSaveOn() {
    if (this.MAXTEMP === 25) {
      return "power saving mode is ON"
    }
    else {
      return "power saving mode is OFF"
    }
  }

  _currentEnergyUsage() {
    if ( this.temp < 18 ) {
       return "low-energy-usage"
    } else if ( this.temp >= 25 ) {
        return "high-energy-usage"
    } else {
        return "medium-energy-usage"
    }
  }

};

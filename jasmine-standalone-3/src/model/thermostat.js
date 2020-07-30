'use strict';

class Thermostat {

  constructor() {
    this.temp = 20;
    this.MINTEMP = 10;
    this.MAXTEMP = 25;
    this.display = "Thermostat is currently set to (C):"
  };

  incrTemp() {
    if (this.temp >= this.MAXTEMP) {
     return this.display = "You've reached the maximum allowed of: "
    }
    this.display = "Thermostat is currently set to (C):";
    this.temp += 1;
  }

  decrTemp() {
    if (this.temp <= this.MINTEMP) {
      return this.display = "You've reached the minimum temperature allowed of: "
    }
    this.display = "Thermostat is currently set to (C):";
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
      return "Powersaving mode is on."
    }
    else {
      return "Powersaving mode is off."
    }
  }

  _currentEnergyUsage() {
    if ( this.temp < 18 ) {
       return "Current energy usage: low"
    } else if ( this.temp >= 25 ) {
        return "Current energy usage: high"
    } else {
        return "Current energy usage: medium"
    }
  }

};

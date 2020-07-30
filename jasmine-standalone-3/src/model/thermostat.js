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
     return this.display = "You've reached the maximum allowed of: "
    }
    this.display = "Temperature (C) is currently at:"
    this.temp += 1;
  }

  decrTemp() {
    if (this.temp <= this.MINTEMP) {
      return this.display = "You've reached the minimum temperature allowed of: "
    }
    this.display = "Your home's temperature is currently set to (C):"
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
      return "You have turned on powersaving mode."
    }
    else {
      return "You have turned off powersaving mode."
    }
  }

  _currentEnergyUsage() {
    if ( this.temp < 18 ) {
       return "Your energy usage is currently: low"
    } else if ( this.temp >= 25 ) {
        return "Your energy usage is currently: high"
    } else {
        return "Your energy usage is currently: medium"
    }
  }

};

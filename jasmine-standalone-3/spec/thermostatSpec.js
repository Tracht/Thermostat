'use strict';

describe("Thermostat", function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("thermostat starts at 20", function() {
    it("returns 20", function() {
      expect(thermostat.temp).toBe(20);
    });
  });

  describe("increase temperature", function() {
    it("by 1", function() {
      thermostat.incr_temp()
      expect(thermostat.temp).toBe(21)
    });
  });

  describe("decrease temperature", function() {
    it("by -1", function() {
      thermostat.decr_temp()
      expect(thermostat.temp).toBe(19)
    });
  });

  describe("minimum temp", function() {
    it("is 10", function() {
      expect(thermostat.MINTEMP).toBe(10)
    });
  });

  describe("when initialized powersave is on", function() {
    it("so temp is 25", function() {
      expect(thermostat.MAXTEMP).toBe(25)
    });
  });

  describe("when powersaving mode is ON", function() {
    it("MAXTEMP is 25", function() {
      thermostat.powerSaveOff()
      thermostat.powerSaveOn()
      expect(thermostat.MAXTEMP).toBe(25)
    });
  });

  describe("when powersaving mode is OFF", function() {
    it("MAXTEMP is 32", function() {
      thermostat.powerSaveOn()
      thermostat.powerSaveOff()
      expect(thermostat.MAXTEMP).toBe(32)
    });
  });

  describe("reset temp", function() {
    it("temp is 20", function() {
      thermostat.reset_temp()
      expect(thermostat.temp).toBe(20)
    });
  });

  describe("current energy usage", function() {
    it("returns low when temp is 17", function() {
      for (var i = 0; i < 4; i++) {
        thermostat.decr_temp();
      }
      console.log(thermostat.temp)
      expect(thermostat.current_energy_usage).toMatch("low usage")
    });

    it("returns medium when temp is 23", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.incr_temp();
      }
      console.log(thermostat.temp)
      expect(thermostat.current_energy_usage).toMatch("medium usage")
    });

    it("returns high when temp is 26", function() {
      for (var i = 0; i < 6; i++) {
        thermostat.incr_temp();
      }
      console.log(thermostat.temp)
      expect(thermostat.current_energy_usage).toMatch("high usage")
    });

  });



});

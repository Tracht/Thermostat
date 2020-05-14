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

});

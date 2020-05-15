$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemp(); // update view

  $('#incrTemp').on('click', function() { //event listener
    console.log(thermostat.incrTemp()); // update model
    updateTemp(); // update view
  });

  $('#decrTemp').on('click', function() {
    thermostat.decrTemp();
    updateTemp();
  });

  $('#resetTemp').on('click', function() {
    thermostat.resetTemp();
    updateTemp();
  });

  $('#powerSaveOn').on('click', function() {
    thermostat.powerSaveOn();
    $('#_isPowerSaveOn').text(thermostat._isPowerSaveOn())
    updateTemp();
  });

  $('#powerSaveOff').on('click', function() {
    thermostat.powerSaveOff();
    $('#_isPowerSaveOn').text(thermostat._isPowerSaveOn())
    updateTemp();
  });

  function updateTemp() {
    $('#display').text(thermostat.display);
    $('#temp').text(thermostat.temp);
    $('#temp').attr('class', thermostat._currentEnergyUsage());
    $('#_currentEnergyUsage').text(thermostat._currentEnergyUsage());
  };

});

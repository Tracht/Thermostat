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
    $('#isPowerSaveOn').text(thermostat.isPowerSaveOn())
    updateTemp();
  })

  $('powerSaveOff').on('click', function() {
    thermostat.powerSaveOff();
    $('#isPowerSaveOn'.text('off'))
    updateTemp();
  });

  function updateTemp() {
    $('#temp').text(thermostat.temp);
    $('#temp').attr('class', thermostat._currentEnergyUsage());
    $('#_currentEnergyUsage').text(thermostat._currentEnergyUsage());
  };

});

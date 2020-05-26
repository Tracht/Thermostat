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

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature-feels-like').text(data.main.feels_like)
    })
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#barometric-pressure').text(data.main.pressure)
    })
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#humidity').text(data.main.humidity)
    })
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#cloudy-meter').text(data.clouds.all)
    })
  });

});

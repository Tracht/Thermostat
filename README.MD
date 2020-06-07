# Thermostat

Create a single web-page thermostat app 

## Preview 
<img width="400" alt="ThermostatJS" src="https://user-images.githubusercontent.com/28805811/83281055-6e5b4980-a1cf-11ea-86bb-25005d8624d1.png">

## How to use on your computer
1. clone this repo with git clone
2. from the command line, run this command and the browser will automatically open
```
open index.html
``` 
3. have fun! 😎

## Specifications included
* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red
* implement a weather API to get temperature in the user's current city

## Outstanding tasks
* Convert sunset time
* Introduce persistence by building a web server to provide the weather API using Sinatra
* Code review / refactoring
* Add CSS 

## Domain modelling

| Object | Message |
| --- | --- |
| Thermostat | temp() |
| | incrTemp() |
| | decrTemp() |
| | powerSaveOn() |
| | powerSaveOff() |
| | resetTemp() |
| | _currentEnergyUsage() |
| | _isPowerSaveOn() |

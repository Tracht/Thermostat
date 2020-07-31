# Thermostat
A single web-page thermostat app 

## Tech Stack
* Javascript, JQuery, Bootstrap, Jasmine (unit tests)

## To run the tests:
* From the command line, run `open SpecRunner.html`

## Preview 
![image](https://user-images.githubusercontent.com/28805811/89039563-950a3d80-d342-11ea-809d-ba67f8f945da.png)

## Installation guide
1. Clone this repo with git clone
2. From the command line, run `open index.html ` to open the website in the browser. 
3. Have fun! 😎

## Specifications included
* Thermostat starts at 20 degrees, the minimum temp is 10 degrees. 
* If power saving mode is on, the maximum temperature is 25 degrees, otherwise it is 32 degrees if it is off. 
* Power saving mode is on by default
* You can increase/decrease the the thermostat with the up/down buttons. Click the reset button to revert to 20 degrees. 
* Your home's energy usage is displayed. Medium usage is between 18-25C.
* You can find out the weather across a range of cities worldwide.

## Outstanding tasks
* Convert sunset time
* Introduce persistence by building a web server to provide the weather API using Sinatra

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

## Diagramming HTTP request/response cycle
![image](https://user-images.githubusercontent.com/28805811/83968533-d7267e00-a8c1-11ea-8103-7faa22beee75.png)

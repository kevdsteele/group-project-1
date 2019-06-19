$(document).ready(function () {



    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sandbox-api.brewerydb.com/v2/breweries/?key=e90031852e06a3a450353766009ce514",
        "method": "GET",
        "headers": {
          "User-Agent": "PostmanRuntime/7.15.0",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          "Postman-Token": "2abd2cbc-82af-4e63-99a0-e5fd00be3094,af3c8f12-7b09-4724-ad31-181a3df417e3",
          "Host": "sandbox-api.brewerydb.com",
          "accept-encoding": "gzip, deflate",
          "Connection": "keep-alive",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });













});
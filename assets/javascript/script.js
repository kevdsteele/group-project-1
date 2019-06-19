$(document).ready(function () {




    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://sandbox-api.brewerydb.com/v2?e90031852e06a3a450353766009ce514=",
        "method": "GET",
        "headers": {
          "User-Agent": "PostmanRuntime/7.15.0",
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          "Postman-Token": "f64f5947-0b4e-4d8a-98ee-35a81486d940,867e39a0-294e-4f07-8f73-b51f8ef76db5",
          "accept-encoding": "gzip, deflate",
          "referer": "https://sandbox-api.brewerydb.com/v2/?e90031852e06a3a450353766009ce514=",
          "Connection": "keep-alive",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });














});
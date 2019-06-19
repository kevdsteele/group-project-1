$(document).ready(function () {




    var url ="https://sandbox-api.brewerydb.com/v2&key=e90031852e06a3a450353766009ce514";
    $.ajax({
      url: url,
      method: "GET"
    }).then(function (response) {
      console.log(response);
    } ); 















});
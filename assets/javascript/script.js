$(document).ready(function () {



    var firebaseConfig = {
        apiKey: "AIzaSyAbux95eN2Rw33jxWVL_uNqhbM6finArpo",
        authDomain: "employee-bba55.firebaseapp.com",
        databaseURL: "https://employee-bba55.firebaseio.com",
        projectId: "employee-bba55",
        storageBucket: "",
        messagingSenderId: "697365741054",
        appId: "1:697365741054:web:4db29453e3fbb82c"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


      var database = firebase.database();

var employeeName="";
var role ="";
var startDate="";
var rate="0";


$("#submit").on("click", function (event){

event.preventDefault();


var employeeName=$("#name").val().trim();
var role=$("#role").val().trim();
var startDate=$("#startdate").val().trim();
var rate=$("#rate").val().trim();


var dateFormat = "MM/DD/YY";
var convertedDate = moment(startDate, dateFormat);
console.log("converted date is " + convertedDate);
var monthsWorked =convertedDate.diff(moment(), "months");
console.log("Months worked is " + monthsWorked);
var totalBill = monthsWorked*rate;

database.ref().push({
    emplyeeName: employeeName,
    role: role,
    startDate: convertedDate,
    months: monthsWorked,
    rate: rate,
    billed: totalBill,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

$("#name").val("");
$("#role").val("");
$("#startdate").val("");
$("#rate").val("");

});
  


database.ref().on("child_added", function(childSnapshot) {

var  tableRow = $("<tr>");
tableRow.attr("id", "employee-row" + childSnapshot.val().emplyeeName);

var  employeeCell = $("<td>");
employeeCell.text(childSnapshot.val().emplyeeName);

var  roleCell = $("<td>");
roleCell.text(childSnapshot.val().role);

var  dateCell = $("<td>");
dateCell.text(childSnapshot.val().startDate);
var  rateCell = $("<td>");
rateCell.text(childSnapshot.val().rate);

var  monthsCell = $("<td>");
monthsCell.text(childSnapshot.val().months);

var  billCell = $("<td>");
billCell.text(childSnapshot.val().billed);


    $("#employee-table").append(tableRow);
    $("#employee-row" + childSnapshot.val().emplyeeName).append(employeeCell, roleCell, dateCell,monthsCell, rateCell,billCell);





});

























});
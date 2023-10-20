const formData = {
  favoriteColor: 'red', likesColor: true,
  name: "bob",
  passNo: "M1230123K",
  dob: "01/08/1991",
  email: "abc@mail.com",
  region: "+65",
  mobile: "12341234",
  passExpDte: "01/11/2030"
};

const restoreOptions = () => {
  chrome.storage.sync.get(formData, (items) => {
    document.getElementById('name').value = items.name;
    document.getElementById('passNo').value = items.passNo;
    document.getElementById('dob').value = items.dob;
    document.getElementById('email').value = items.email;
    document.getElementById('confirmEmail').value = items.email;
    document.getElementById('region').value = items.region;
    document.getElementById('confirmRegion').value = items.region;
    document.getElementById('mobile').value = items.mobile;
    document.getElementById('confirmMobile').value = items.mobile;
    document.getElementById('passExpDte').value = items.passExpDte;
  });
};

const today = new Date();
const departureDate = new Date();
departureDate.setDate(today.getDate() + 30); // Add 30 days to the current date
const todayFormattedDate = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
const departureFormattedDate = ('0' + departureDate.getDate()).slice(-2) + '/' + ('0' + (departureDate.getMonth() + 1)).slice(-2) + '/' + departureDate.getFullYear();

document.getElementById("nationality").selectedIndex = "212";
document.getElementById("passNo").value = "M1230123K";
document.getElementById("name").value = "Charlie";
document.getElementById("sex").value = "1";
document.getElementById("dob").value = "01/08/1991";
document.getElementById("email").value = "aa@gmail.com";
document.getElementById("confirmEmail").value = "aa@gmail.com";
document.getElementById("region").value = "+65";
document.getElementById("mobile").value = "12341234";
document.getElementById("confirmRegion").value = "+65";
document.getElementById("confirmMobile").value = "12341234";
document.getElementById("trvlMode").value = "2";
document.getElementById("passExpDte").value = "01/11/2030";
document.getElementById("arrDt").value = todayFormattedDate;
document.getElementById("depDt").value = departureFormattedDate;

restoreOptions();
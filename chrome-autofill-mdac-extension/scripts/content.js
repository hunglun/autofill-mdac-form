const formData = {
  name: "bob",
  passNo: "M1230123K",
  dob: "01/08/1991",
  email: "abc@mail.com",
  region: "+65",
  mobile: "12341234",
  passExpDte: "01/11/2030",
  sex: "1",
  nationality : "212",
  trvlMode : "2",
  accommodationStay : "3",
  accommodationAddress1 : "Legoland House 1A",
  accommodationState : "1",
  accommodationCity: "1",
  accommodationPostcode: "00000",
  embark: "212"
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
    document.getElementById('sex').value = items.sex;
    document.getElementById('nationality').selectedIndex = items.nationality;
    document.getElementById('trvlMode').selectedIndex = items.trvlMode;
    document.getElementById("accommodationStay").selectedIndex = items.accommodationStay;
    document.getElementById("accommodationAddress1").value = items.accommodationAddress1;
    document.getElementById("embark").selectedIndex = items.embark;
    
    var state = document.getElementById("accommodationState");
    var city = document.getElementById("accommodationCity");

    // Define the function to handle the change event of the state
    function handleStateChange(event) {
        // Assuming some mechanism here to populate the city dropdown based on the state
        // You might need to call a function here that loads the city options based on the state

        // Set a small delay to allow city options to load
        setTimeout(() => {
            city.selectedIndex = "1";  // Select the first city
        }, 500); // Adjust the timeout duration as per the loading time of city options
    }

    // Attach the event listener to the 'state' element
    state.addEventListener("change", handleStateChange);

    // Trigger the state change programmatically to load cities
    state.selectedIndex = "1";
    const evt = new Event("change", { bubbles: true, cancelable: false });
    state.dispatchEvent(evt);


    document.getElementById("accommodationPostcode").value = items.accommodationPostcode;
        
  });
};

const today = new Date();
const departureDate = new Date();
departureDate.setDate(today.getDate() + 30); // Add 30 days to the current date
const todayFormattedDate = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
const departureFormattedDate = ('0' + departureDate.getDate()).slice(-2) + '/' + ('0' + (departureDate.getMonth() + 1)).slice(-2) + '/' + departureDate.getFullYear();

// document.getElementById("embark").selectedIndex = "212";
// document.getElementById("nationality").selectedIndex = "212";
// document.getElementById("sex").value = "1";
// document.getElementById("trvlMode").value = "2";
document.getElementById("arrDt").value = todayFormattedDate;
document.getElementById("depDt").value = departureFormattedDate;


 restoreOptions();
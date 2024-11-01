const formData = {
  "selectedProfile": 2,
  1: {},
  2: {},
  3: {},
  4: {}
};

const restoreOptions = () => {
  chrome.storage.sync.get(formData, (items) => {
	console.log("items", items);
    console.log("Selected item", items[items.selectedProfile]);
    console.log("selected profile", items.selectedProfile);
    var selectedProfile = items.selectedProfile;
    console.log("name", items[selectedProfile].name);
	console.log("nationality", items[selectedProfile].nationality);
    document.getElementById('name').value = items[selectedProfile].name; //items[selectedProfile].name;
	document.getElementById('sex').value = items[selectedProfile].sex;
	document.getElementById('nationality').value = items[selectedProfile].nationality;
	document.getElementById('passNo').value = items[selectedProfile].passNo;
    document.getElementById('dob').value = items[selectedProfile].dob;
    document.getElementById('email').value = items[selectedProfile].email;
    document.getElementById('confirmEmail').value = items[selectedProfile].email;
    document.getElementById('passExpDte').value = items[selectedProfile].passExpDte;

	// catch error by trying some code
	
	document.getElementById('region').value = items[selectedProfile].region;
    document.getElementById('mobile').value = items[selectedProfile].mobile;
    
   
    document.getElementById('trvlMode').selectedIndex = items[selectedProfile].trvlMode;
    document.getElementById("accommodationStay").selectedIndex = items[selectedProfile].accommodationStay;
    document.getElementById("accommodationAddress1").value = items[selectedProfile].accommodationAddress1;
    document.getElementById("embark").value = items[selectedProfile].embark;
    document.getElementById("vesselNm").value = "NA";


    var state = document.getElementById("accommodationState");
    var city = document.getElementById("accommodationCity");

    // Define the function to handle the change event of the state
    function handleStateChange(event) {
      // Assuming some mechanism here to populate the city dropdown based on the state
      // You might need to call a function here that loads the city options based on the state

      // Set a small delay to allow city options to load
      setTimeout(() => {
        console.log("setting city index to", items[selectedProfile].accommodationCity);
        city.selectedIndex = items[selectedProfile].accommodationCity;  // Select the first city
      }, 500); // Adjust the timeout duration as per the loading time of city options
    }

    // Attach the event listener to the 'state' element
    state.addEventListener("change", handleStateChange);

    // Trigger the state change programmatically to load cities

    console.log("setting state index to", items[selectedProfile].accommodationState);
    state.selectedIndex = items[selectedProfile].accommodationState;
    const evt = new Event("change", { bubbles: true, cancelable: false });
    state.dispatchEvent(evt);


    document.getElementById("accommodationPostcode").value = items[selectedProfile].accommodationPostcode;

  });
};

const today = new Date();
const departureDate = new Date();
departureDate.setDate(today.getDate() + 30); // Add 30 days to the current date
const todayFormattedDate = ('0' + today.getDate()).slice(-2) + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear();
const departureFormattedDate = ('0' + departureDate.getDate()).slice(-2) + '/' + ('0' + (departureDate.getMonth() + 1)).slice(-2) + '/' + departureDate.getFullYear();

document.getElementById("arrDt").value = todayFormattedDate;
document.getElementById("depDt").value = departureFormattedDate;


restoreOptions();
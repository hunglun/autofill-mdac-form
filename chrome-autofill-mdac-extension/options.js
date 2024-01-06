// Saves options to chrome.storage
const saveOptions = () => {
  const name = document.getElementById('name').value;
  const passNo = document.getElementById('passNo').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const region = document.getElementById('region').value;
  const mobile = document.getElementById('mobile').value;
  const passExpDte = document.getElementById('passExpDte').value;
  const sex = document.getElementById('sex').value;
  const nationality = document.getElementById('nationality').value;
  const trvlMode = document.getElementById('trvlMode').value;

  const accommodationStay = document.getElementById("accommodationStay").selectedIndex; 
  const accommodationAddress1 = document.getElementById("accommodationAddress1").value;
  const accommodationState = document.getElementById("accommodationState").selectedIndex; 
  const accommodationCity = document.getElementById("accommodationCity").selectedIndex; 
  const accommodationPostcode = document.getElementById("accommodationPostcode").value;
  chrome.storage.sync.set(
    {
      name: name,
      passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
      sex : sex,
      nationality: nationality,
      trvlMode : trvlMode,
      accommodationStay : accommodationStay,
      accommodationAddress1 : accommodationAddress1,
      accommodationState : accommodationState,
      accommodationCity: accommodationCity,
      accommodationPostcode: accommodationPostcode
    },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    {
      name: "Bob",
      passNo: "M1230123K",
      dob: "01/08/1991",
      email: "abc@mail.com",
      region: "+65",
      mobile: "12341234",
      passExpDte: "01/11/2030",
      sex : "1",
      nationality : "212",
      trvlMode : "2",
      accommodationStay : "3",
      accommodationAddress1 : "Legoland House 1A",
      accommodationState : "1",
      accommodationCity: "1",
      accommodationPostcode: "00000"
    },
    (items) => {
      document.getElementById('name').value = items.name;
      document.getElementById('passNo').value = items.passNo;
      document.getElementById('dob').value = items.dob;
      document.getElementById('email').value = items.email;
      // document.getElementById('confirmEmail').value = items.email;
      document.getElementById('region').value = items.region;
      // document.getElementById('confirmRegion').value = items.region;
      document.getElementById('mobile').value = items.mobile;
      // document.getElementById('confirmMobile').value = items.mobile;
      document.getElementById('passExpDte').value = items.passExpDte;
      document.getElementById('sex').value = items.sex;
      document.getElementById('nationality').value = items.nationality;
      document.getElementById('trvlMode').value = items.trvlMode;

      // new fields in 2024
      document.getElementById("accommodationStay").selectedIndex = items.accommodationStay;
      document.getElementById("accommodationAddress1").value = items.accommodationAddress1;
      document.getElementById("accommodationState").selectedIndex = items.accommodationState;
      document.getElementById("accommodationCity").selectedIndex = items.accommodationCity;
      document.getElementById("accommodationPostcode").value = items.accommodationPostcode;
      
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
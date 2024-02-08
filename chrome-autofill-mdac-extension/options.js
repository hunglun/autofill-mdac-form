// Saves options to chrome.storage

const selectProfile = () => {
  const profileNumber = document.getElementById('profileNumber').value;
  chrome.storage.sync.set(
    {
      selectedProfile: profileNumber
    }
    ,
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Profile' + profileNumber + " selected";
      console.log(status.textContent);
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  )
  
}
const saveOptions = () => {
  const profileNumber = document.getElementById('profileNumber').value;
  const name = document.getElementById('name' + profileNumber).value;
  const passNo = document.getElementById('passNo' + profileNumber).value;
  const dob = document.getElementById('dob' + profileNumber).value;
  const email = document.getElementById('email' + profileNumber).value;
  const region = document.getElementById('region' + profileNumber).value;
  const mobile = document.getElementById('mobile' + profileNumber).value;
  const passExpDte = document.getElementById('passExpDte' + profileNumber).value;
  const sex = document.getElementById('sex' + profileNumber).value;
  const nationality = document.getElementById('nationality' + profileNumber).value;
  const trvlMode = document.getElementById('trvlMode' + profileNumber).value;

  const accommodationStay = document.getElementById("accommodationStay" + profileNumber).selectedIndex;
  const accommodationAddress1 = document.getElementById("accommodationAddress1").value; // TODO modify it
  const accommodationState = document.getElementById("accommodationState" + profileNumber).value;
  const embark = document.getElementById("embark" + profileNumber).value;
  const accommodationCity = document.getElementById("accommodationCity" + profileNumber).value;
  const accommodationPostcode = document.getElementById("accommodationPostcode" + profileNumber).value;

  if (profileNumber == 1) {
    chrome.storage.sync.set(
      {
        1: {
          name: name,
          passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
          sex: sex,
          nationality: nationality,
          trvlMode: trvlMode,
          accommodationStay: accommodationStay,
          accommodationAddress1: accommodationAddress1,
          accommodationState: accommodationState,
          accommodationCity: accommodationCity,
          accommodationPostcode: accommodationPostcode,
          embark: embark
        }
      },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        console.log("options saved.");
        console.log("profile " + profileNumber + " saved passport num to " + passNo);

        console.log("-------")
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }

    );
  }
  if (profileNumber == 2) {
    chrome.storage.sync.set(
      {
        2: {
          name: name,
          passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
          sex: sex,
          nationality: nationality,
          trvlMode: trvlMode,
          accommodationStay: accommodationStay,
          accommodationAddress1: accommodationAddress1,
          accommodationState: accommodationState,
          accommodationCity: accommodationCity,
          accommodationPostcode: accommodationPostcode,
          embark: embark
        }
      },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        console.log("options saved.");
        console.log("profile " + profileNumber + " saved passport num to " + passNo);

        console.log("-------")
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }

    );
  }
  if (profileNumber == 3) {
    chrome.storage.sync.set(
      {
        3: {
          name: name,
          passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
          sex: sex,
          nationality: nationality,
          trvlMode: trvlMode,
          accommodationStay: accommodationStay,
          accommodationAddress1: accommodationAddress1,
          accommodationState: accommodationState,
          accommodationCity: accommodationCity,
          accommodationPostcode: accommodationPostcode,
          embark: embark
        }
      },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        console.log("options saved.");
        console.log("profile " + profileNumber + " saved passport num to " + passNo);

        console.log("-------")
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }

    );
  }
  if (profileNumber == 4) {
    chrome.storage.sync.set(
      {
        4: {
          name: name,
          passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
          sex: sex,
          nationality: nationality,
          trvlMode: trvlMode,
          accommodationStay: accommodationStay,
          accommodationAddress1: accommodationAddress1,
          accommodationState: accommodationState,
          accommodationCity: accommodationCity,
          accommodationPostcode: accommodationPostcode,
          embark: embark
        }
      },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        console.log("options saved.");
        console.log("profile " + profileNumber + " saved passport num to " + passNo);

        console.log("-------")
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }

    );
  }
};

default_options=  {name: "Alan",
passNo: "K12312321Z", dob: "01/01/1999", email: "abc@gmail.com", region: "+65", mobile: "91234343", passExpDte: "01/01/2030",
sex: "MALE",
nationality: "SINGAPORE",
trvlMode: "LAND",
accommodationStay: "others",
accommodationAddress1: "1 Medini #01-01",
accommodationState: "JOHORE",
accommodationCity: "JOHORE",
accommodationPostcode: "00000",
embark: "SINGAPORE"}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
 
  chrome.storage.sync.get(
    {
      "selectedProfile":2,
      1:default_options,
      2:default_options,
      3:default_options,
      4:default_options
    },
    (items) => {
     
      console.log("passport for profiles:", items[1].passNo, items[2].passNo)
      for (let i = 1; i < 5; i++) {
        document.getElementById('name' + i).value = items[i].name;
        document.getElementById('passNo' + i).value = items[i].passNo;
        document.getElementById('dob' + i).value = items[i].dob;
        document.getElementById('email' + i).value = items[i].email;
        document.getElementById('region' + i).value = items[i].region;
        document.getElementById('mobile' + i).value = items[i].mobile;
        document.getElementById('passExpDte' + i).value = items[i].passExpDte;
        document.getElementById('sex' + i).value = items[i].sex;
        document.getElementById('nationality' + i).value = items[i].nationality;
        document.getElementById('trvlMode' + i).value = items[i].trvlMode;
        // new fields in 2024
        document.getElementById("accommodationStay" + i).selectedIndex = items[i].accommodationStay;
        document.getElementById("accommodationAddress" + i).value = items[i].accommodationAddress1;
        document.getElementById("accommodationState" + i).value = items[i].accommodationState;
        document.getElementById("accommodationCity" + i).value = items[i].accommodationCity;
        document.getElementById("accommodationPostcode" + i).value = items[i].accommodationPostcode;
        document.getElementById("embark" + i).value = items[i].embark;
      }

    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('profileNumber').addEventListener('change', selectProfile);
document.getElementById('load').addEventListener('click', restoreOptions);
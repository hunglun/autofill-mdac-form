// Saves options to chrome.storage
const saveOptions = () => {
  const color = document.getElementById('color').value;
  const likesColor = document.getElementById('like').checked;
  const name = document.getElementById('name').value;
  const passNo = document.getElementById('passNo').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const region = document.getElementById('region').value;
  const mobile = document.getElementById('mobile').value;
  const passExpDte = document.getElementById('passExpDte').value;
  const sex = document.getElementById('sex').value;

  chrome.storage.sync.set(
    {
      favoriteColor: color, likesColor: likesColor, name: name,
      passNo: passNo, dob: dob, email: email, region: region, mobile: mobile, passExpDte: passExpDte,
      sex : sex
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
      favoriteColor: 'red', likesColor: true, name: "Bob",
      passNo: "M1230123K",
      dob: "01/08/1991",
      email: "abc@mail.com",
      region: "+65",
      mobile: "12341234",
      passExpDte: "01/11/2030",
      sex : "1"
    },
    (items) => {
      document.getElementById('color').value = items.favoriteColor;
      document.getElementById('like').checked = items.likesColor;
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
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
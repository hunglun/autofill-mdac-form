// Saves options to chrome.storage

const formData = {
  nationality: "",
  passNo: "",
  name: "",
  sex: "",
  dob: "",
  email: "",
  confirmEmail: "",
  region: "",
  mobile: "",
  confirmRegion: "",
  confirmMobile: "",
  trvlMode: "",
  passExpDte: "",
  arrDt: "",
  depDt: ""
};

const saveOptions = () => {
  // const color = document.getElementById('color').value;
  // const likesColor = document.getElementById('like').checked;

  // const nationality = document.getElementById('nationality').value;
  // const passNo = document.getElementById('passNo').value;
  // const name = document.getElementById('name').value;
  // const sex = document.getElementById('sex').value;
  // const dob = document.getElementById('dob').value;
  // const email = document.getElementById('email').value;
  // const region = document.getElementById('region').value;
  // const mobile = document.getElementById('mobile').value;
  // const trvlMode = document.getElementById('trvlMode').value;
  // const passExpDte = document.getElementById('passExpDte').value;


  const formData = {
    nationality: document.getElementById('nationality').value,
    passNo: document.getElementById('passNo').value,
    name: document.getElementById('name').value,
    sex: document.getElementById('sex').value,
    dob: document.getElementById('dob').value,
    email: document.getElementById('email').value,
    region: document.getElementById('region').value,
    mobile: document.getElementById('mobile').value,
    trvlMode: document.getElementById('trvlMode').value,
    passExpDte: document.getElementById('passExpDte').value,

    color: document.getElementById('color').value,
    likesColor: document.getElementById('like').checked,
  };

  chrome.storage.sync.set(
    { formData },
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
  chrome.storage.sync.get(formData, (items) => {
    document.getElementById('nationality').value = items.nationality || "";
    document.getElementById('passNo').value = items.passNo || "";
    document.getElementById('name').value = items.name || "";
    document.getElementById('sex').value = items.sex || "";
    document.getElementById('dob').value = items.dob || "";
    document.getElementById('email').value = items.email || "";
    document.getElementById('region').value = items.region || "";
    document.getElementById('mobile').value = items.mobile || "";
    document.getElementById('trvlMode').value = items.trvlMode || "";
    document.getElementById('passExpDte').value = items.passExpDte || "";
  });
};


document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
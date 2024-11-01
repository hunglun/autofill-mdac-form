# 1 Nov 2024 Update new options and their values 

# How to load the unpacked chrome extension?
See https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked


# DONE Multi Profile Options [ 3 days -> 2 days ]
Save and select from a list of profiles to populate the form.
So, one can fill up the form not only for oneself, but also for parents and children.

- [X] extend options.html to include a drop list of profiles
- [X] extend the memory model
- [X] load selected profile to main webpage
- [X] add one more nationality
# Source Files
options.html calls options.js to persist user data into chrome storage.

contents.js populates the form by matching element id with values found in storage, when the browser loads MDAC form url.

# Use Chrome Extension to update MDAC
Enter in Chrome address bar `chrome://extensions/`

Enable developer mode

Click `Load unpacked` and select chrome-autofill-mdac-extension folder found in this repository

Use Chrome to browse https://imigresen-online.imi.gov.my/mdac/main?registerMain

You would see the form is automatically filled up.

To change the form values to yours, right click the extension and select 'options'.

# Debugging
Use inspect view from the chrome extension, to debug options.html and options.js

Also, use developer tools on the MDAC register page, to debug content.js
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

# Bookmarklet (works in Chrome, Edge, Firefox and Safari)
The `bookmarklet/` folder is a browser-neutral replacement for the Chrome extension. It is a `javascript:` bookmark that fills the MDAC form when clicked. Nothing is installed in the browser.

## Build
1. Copy `bookmarklet/profile.example.json` to `bookmarklet/profile.json` and put in your details. `profile.json` is gitignored, so your data stays local.
2. Run `node bookmarklet/build.js bookmarklet/profile.json`.
3. Open `bookmarklet/dist/install.html`. `dist/` is gitignored and holds the generated bookmark.

## Install
- Show the bookmarks bar: Chrome/Edge/Firefox `Ctrl+Shift+B` (or `Cmd+Shift+B` on macOS), Safari View > Show Favorites Bar.
- Drag the "MDAC autofill" button from `install.html` to the bookmarks bar.
- On iPhone/iPad, copy the raw bookmark URL from `install.html` and save it as a bookmark's address.

## Use
1. Open https://imigresen-online.imi.gov.my/mdac/main?registerMain.
2. Click the "MDAC autofill" bookmark.
3. Check the filled fields, solve the "Drag To Verify" slider, and submit yourself.

## What it fills
- Personal details: name, sex, nationality, place of birth, passport number, date of birth, passport expiry, email (twice), mobile and region code.
- Travel: mode of travel, vessel name (set to `NA`), last port of embarkation.
- Accommodation: stay type, address, state, city and postcode.
- Dates: arrival is today's date and departure is today plus 2 days. These are computed when the bookmarklet runs, not taken from the profile.

## Limits and notes
- The bookmarklet never solves the captcha or submits the form.
- The City list is loaded by AJAX after State is chosen. The script waits up to about 10 seconds for it. If it doesn't load, the script shows a message and you pick the city yourself.
- Dropdowns accept either the option code (e.g. `SGP`, `01`) or the visible text (e.g. `SINGAPORE`, `JOHOR`).
- The stay length is set by `STAY_DAYS` in `bookmarklet/fill.js`. The form requires the trip to be within 3 days, so the default is 2.
- If the site's content security policy blocks bookmarklets, the click does nothing. This has not been tested on the live site yet.
- Rebuild the bookmark after changing `profile.json` or `fill.js`, then update the saved bookmark.
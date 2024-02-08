# TODO Multi Profile Options [ 3 days ]
Save and select from a list of profiles to populate the form.
So, one can fill up the form not only for oneself, but also for parents and children.

# Use Chrome Extension to update MDAC
Enter in Chrome address bar `chrome://extensions/`

Enable developer mode

Click `Load unpacked` and select chrome-autofill-mdac-extension folder found in this repository

Use Chrome to browse https://imigresen-online.imi.gov.my/mdac/main?registerMain

You would see the form is automatically filled up.

To change the form values to yours, right click the extension and select 'options'.

# Video demo for using devtools to update MDAC

https://github.com/hunglun/autofill-mdac-form/assets/343395/e2767893-eb83-46b8-b353-d242dbbf7cdf




# Instruction to use this autofill feature
Fill up example_dot_env_file

Rename it to .env

Run `python3 generate_autofill_js.py`

Copy the output to clipboard

Open Chrome to browse to `https://imigresen-online.imi.gov.my/mdac/main?registerMain`

Open developer tools and go to console.

Paste the output to the console.

Now, the web form is filled up automatically.

# First Test
Create a simple test form app that log the passport number and name when the user clicks submit.

The autofill app browses to the simple test form on localhost and populates predefined values on the form. Finally, it clicks the submit button.

# Second Test
Autofill MDAC form. 

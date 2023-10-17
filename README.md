# Video demo
<video width="320" height="240" controls>
  <source src="demo.mov" type="video/mp4">
</video>


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

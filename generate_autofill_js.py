import os
from dotenv import load_dotenv
from datetime import datetime, timedelta
load_dotenv()

# Create a dictionary to map element IDs to their corresponding .env variables
fields = {
    "nationality": "NATIONALITY",
    "passNo": "PASSPORT",
    "name":"NAME",
    "sex": "SEX",
    "dob": "DOB",
    "email": "EMAIL",
    "confirmEmail": "CONFIRM_EMAIL",
    "region": "REGION",
    "mobile": "MOBILE",
    "confirmRegion": "CONFIRM_REGION",
    "confirmMobile": "CONFIRM_MOBILE",
    "trvlMode": "TRVL_MODE",
    "passExpDte": "PASSPORT_EXPIRY"
}

# Generate the JavaScript code
js_code = ""
for element_id, env_var in fields.items():
    value = os.getenv(env_var)
    if value:  # Check if the .env variable exists
        if env_var == "NATIONALITY":
            js_code += f'document.getElementById("{element_id}").selectedIndex = "{value}";\n'
        else:
            js_code += f'document.getElementById("{element_id}").value = "{value}";\n'

    else:
        js_code += f'document.getElementById("{element_id}").value = "";\n'


# Determine today's date and the date 30 days from now
today = datetime.now().strftime('%d/%m/%Y')
thirty_days_later = (datetime.now() + timedelta(days=30)).strftime('%d/%m/%Y')

# Add the JavaScript for arrival and departure dates
js_code += f'document.getElementById("arrDt").value = "{today}";\n'
js_code += f'document.getElementById("depDt").value = "{thirty_days_later}";\n'

js_code += f'document.getElementById("accommodationStay").selectedIndex = "3";\n'
js_code += f'document.getElementById("accommodationAddress1").value = "Legoland House 1A";\n'
js_code += f'document.getElementById("accommodationState").selectedIndex = "1";\n'
js_code += f'document.getElementById("accommodationCity").selectedIndex = "1";\n'
js_code += f'document.getElementById("accommodationPostcode").value = "70123";\n'






print(js_code)

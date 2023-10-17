from selenium import webdriver
web = webdriver.Chrome()
web.get('https://imigresen-online.imi.gov.my/mdac/main?registerMain')

# Run into page crash issue:

"""
node ➜ /workspaces/autofill-malaysia-mdac-form (master) $ python3 -i autofill.py 
Traceback (most recent call last):
  File "/workspaces/autofill-malaysia-mdac-form/autofill.py", line 3, in <module>
    web.get('https://imigresen-online.imi.gov.my/mdac/main')
  File "/usr/lib/python3/dist-packages/selenium/webdriver/remote/webdriver.py", line 330, in get
    self.execute(Command.GET, {'url': url})
  File "/usr/lib/python3/dist-packages/selenium/webdriver/remote/webdriver.py", line 318, in execute
    self.error_handler.check_response(response)
  File "/usr/lib/python3/dist-packages/selenium/webdriver/remote/errorhandler.py", line 242, in check_response
    raise exception_class(message, screen, stacktrace)
selenium.common.exceptions.WebDriverException: Message: unknown error: session deleted because of page crash
from unknown error: cannot determine loading status
from tab crashed
  (Session info: chrome=117.0.5938.149)

"""
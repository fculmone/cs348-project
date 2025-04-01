import pyautogui
import time

time.sleep(3)
# search for image
pyautogui.moveTo(261, 162, duration=.5) #duckduckgo searchbar coords
pyautogui.leftClick()
pyautogui.moveTo(755, 159, duration=0.5) #the x to clear search
pyautogui.leftClick()
pyautogui.moveTo(261, 162, duration=0.5) #back to search bar
pyautogui.leftClick()
pyautogui.write('Cairo Egypt', interval=0.1)
pyautogui.press('enter')
time.sleep(1)

# click and download image
pyautogui.moveTo(33, 335, duration=.5) #coords to click on image
pyautogui.leftClick()
pyautogui.moveTo(504, 633, duration=.5) #coords so we can right click and save image as
pyautogui.rightClick()
pyautogui.moveTo(596, 832, duration=.5) #coords to select save image as
pyautogui.leftClick()
time.sleep(1)
pyautogui.press('backspace')
pyautogui.write('epic_cat.jpg', interval=0.1)
pyautogui.moveTo(1181, 816, duration=1) #click the save
pyautogui.leftClick()

#scroll back to top of page
time.sleep(1)
pyautogui.leftClick()
pyautogui.hotkey('ctrl', 'home')
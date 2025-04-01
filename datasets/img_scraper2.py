from selenium import webdriver
import time
from selenium.webdriver.common.by import By
import csv
import pyautogui
import requests


def type_text_safe(text: str, interval: float = 0.01):
    """
    Safely types text using pyautogui, with key releases and per-character typing to avoid macOS weirdness.
    """
    # Release all modifiers just in case
    for key in ['command', 'ctrl', 'option', 'shift', 'fn']:
        pyautogui.keyUp(key)

    time.sleep(0.2)  # Let the OS catch up before typing

    for ch in text:
        pyautogui.write(ch)
        time.sleep(interval)


def download_image(search_term: str, file_name: str):
    time.sleep(0.5)
    pyautogui.keyUp('command')
    pyautogui.keyUp('ctrl')
    pyautogui.keyUp('option')
    pyautogui.keyUp('fn')
    pyautogui.moveTo(413, 101, duration=0.5) #the url header
    time.sleep(0.5)
    pyautogui.tripleClick()
    time.sleep(0.5)
    type_text_safe(url)
    pyautogui.press('enter')
    time.sleep(1)

    # click and download image
    pyautogui.moveTo(33, 335, duration=0.5) #coords to click on image
    pyautogui.leftClick()
    pyautogui.moveTo(504, 633, duration=1) #coords so we can right click and save image as
    time.sleep(1) #need to wait a bit to allow image to load
    pyautogui.rightClick()
    pyautogui.moveTo(596, 832, duration=.5) #coords to select save image as
    pyautogui.leftClick()
    time.sleep(0.5)
    pyautogui.keyUp('command')
    pyautogui.keyUp('ctrl')
    pyautogui.keyUp('option')
    time.sleep(0.5)
    type_text_safe(file_name)
    pyautogui.moveTo(1181, 816, duration=.5) #click the save
    pyautogui.leftClick()

    #scroll back to top of page
    time.sleep(1)
    pyautogui.leftClick()
    pyautogui.press('up')
    pyautogui.press('up')
    pyautogui.press('up')
    pyautogui.press('up')
    time.sleep(0.5)
    
    



time.sleep(3)

city_images_file = open("city_images.csv", "w")
city_images_file.write("city_id, city, country, img_url\n")

start_from = 14

top100_cities_path = r'/Users/francescoculmone/Desktop/School/3A/CS 348/Project/datasets/top100_cities.csv'
with open(top100_cities_path, mode ='r', encoding='utf-8') as top100_cities:
    csvFile = csv.reader(top100_cities)
    isHeader = True
    for lines in csvFile:
        if isHeader:
            isHeader = False
            continue
        if int(lines[0]) > start_from:
            continue

        search = lines[1] + " " + lines[2] 
        print(search)
        file_name = lines[0] + '-' + lines[1] + '-' + lines[2] + '.jpg'
        file_name = file_name.replace(" ", "-")
        url = "https://duckduckgo.com/?t=h_&q=" + search.replace(" ", "+") + "&iax=images&ia=images&iaf=layout%3AWide%2Csize%3AWallpaper"
        download_image(url, file_name)
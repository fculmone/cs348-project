from selenium import webdriver
import time
from selenium.webdriver.common.by import By
import csv

import requests

def download_url(img_url: str, file_name: str):
    with open('images/' + file_name, 'wb') as handle:
        response = requests.get(img_url, stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)

#  "/html/body/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[N]/div[1]/span/img"

driver = webdriver.Chrome() 

# requires the driver is already open
def find_image_urls(search: str, count: int) -> list[str]:
    url = "https://duckduckgo.com/?t=h_&q=" + search.replace(" ", "+") + "&iax=images&ia=images&iaf=layout%3AWide%2Ctype%3Aphoto%2Csize%3AWallpaper"
    driver.get(url)
    driver.implicitly_wait(6)
    retval = []
    for i in range (1, count + 1):
        elements = driver.find_elements(By.XPATH, "/html/body/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[" + str(i) + "]/div[1]/span/img")
        retval.append(elements[0].get_attribute('data-src'))
    return retval



city_images_file = open("city_images.csv", "w")
city_images_file.write("city_id, city, country, img_url\n")

start_from = 10

top100_cities_path = r'C:\Users\Joe\Desktop\school\cs348\cs348-project\datasets\top100_cities.csv'
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
        images = find_image_urls(search, 1)
        for image_url in images:
            city_images_file.write(lines[0] + "," + lines[1] + "," + lines[2] + ",\"" + image_url + "\"\n")
            file_name = lines[0] + '-' + lines[1] + '-' + lines[2] + '.jpg'
            file_name = file_name.replace(" ", "-")
            download_url('https:' + image_url, file_name)



driver.quit()
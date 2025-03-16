from selenium import webdriver
import time
from selenium.webdriver.common.by import By
import csv

#  "/html/body/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[N]/div[1]/span/img"

driver = webdriver.Chrome() 

# requires the driver is already open
def find_image_urls(search: str, count: int) -> list[str]:
    url = "https://duckduckgo.com/?t=h_&q=" + search.replace(" ", "+") + "&iax=images&ia=images"
    driver.get(url)
    driver.implicitly_wait(2)
    retval = []
    for i in range (1, count + 1):
        elements = driver.find_elements(By.XPATH, "/html/body/div[2]/div[4]/div[2]/div[1]/div[2]/div[2]/div[" + str(i) + "]/div[1]/span/img")
        retval.append(elements[0].get_attribute('data-src'))
    return retval



city_images_file = open("city_images.csv", "w")
city_images_file.write("city_id, city, country, img_url\n")

top100_cities_path = r'C:\Users\Joe\Desktop\school\cs348\cs348-project\datasets\top100_cities.csv'
with open(top100_cities_path, mode ='r', encoding='utf-8') as top100_cities:
    csvFile = csv.reader(top100_cities)
    isHeader = True
    for lines in csvFile:
        if isHeader:
            isHeader = False
            continue
        search = lines[1] + " " + lines[2] + " city view"
        print(search)
        images = find_image_urls(search, 3)
        for image_url in images:
            city_images_file.write(lines[0] + "," + lines[1] + "," + lines[2] + ",\"" + image_url + "\"\n")


driver.quit()
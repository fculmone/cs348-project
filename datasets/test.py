import requests

with open('images/pic1.jpg', 'wb') as handle:
    response = requests.get('https://ontariospca.ca/wp-content/uploads/2018/08/Adopting-shelter-cat.jpg', stream=True)

    if not response.ok:
        print(response)

    for block in response.iter_content(1024):
        if not block:
            break

        handle.write(block)
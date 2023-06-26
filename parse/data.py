import requests
from bs4 import BeautifulSoup
import json
import subprocess

url = 'https://vkusmart.vmv.kz/catalog/ryba-i-rybnaya-produktsiya/'

# Отправляем GET-запрос и получаем HTML-страницу
response = requests.get(url)
html = response.text

# Создаем объект BeautifulSoup для парсинга HTML
soup = BeautifulSoup(html, 'html.parser')

# Ищем элементы с информацией о продуктах
items = soup.find_all('div', class_='catalog_item_wrapp')

data = []  # Список для хранения данных о продуктах

for item in items:
    # Извлекаем название продукта
    title_element = item.find('a', class_='dark_link js-notice-block__title option-font-bold font_sm')
    title = title_element.text.strip()
    
    price_element = item.find('div', class_='price').find('span', class_='price_value')
    price = price_element.text.strip() if price_element else 'Нет цены'
    
    # Извлекаем путь к картинке продукта
    image_element = item.find('img', class_='img-responsive')
    image_url = 'https://vkusmart.vmv.kz/'+image_element['data-src']

    text = "Добро пожаловать в нашу рыбную лавку, где вы найдете свежую и разнообразную выборку высококачественной рыбы. Мы гордимся предлагать нашим клиентам только самые свежие и вкусные морепродукты, которые придадут особый вкус вашему столу.В нашем ассортименте вы найдете разнообразие видов рыбы, начиная от классических сортов, таких как лосось, треска, окунь и скумбрия, до экзотических рыб, таких как тунец, дорадо, сибас и многое другое. Все наши рыбы проходят строгий отбор, чтобы гарантировать свежесть и качество каждого экземпляра. Мы сотрудничаем с надежными поставщиками, которые обеспечивают нам свежую рыбу прямо из морей и океанов."

    category = 'fish'
    
    # Создаем словарь с данными о продукте
    product_data = {
        'name': title,
        'price': price,
        'image': image_url,
        'text' : text,
        'category' : category
    }
    
    data.append(product_data)  # Добавляем данные продукта в список

# Сохраняем данные в файл JSON
with open('./parse/output.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print('Данные сохранены в файл')

def run_another_python_file():
    subprocess.run(["python", "./parse/tosql.py"])

run_another_python_file()
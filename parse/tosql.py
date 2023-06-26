import json

# Функция для экранирования символов в строках, чтобы избежать SQL-инъекций


def escape_string(value):
    return value.replace("'", "''")


# Открытие файла JSON для чтения
with open('./parse/output.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)

# Открытие файла SQL для записи
with open('./parse/mySQL.sql', 'w', encoding='utf-8') as f:
    # Генерация запросов SQL INSERT
    for item in data:
        insert_query = "INSERT INTO fooddata (name, price, image, text, category ) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}');".format(
            escape_string(item["name"]),
            escape_string(item["price"]),
            escape_string(item["image"]),
            escape_string(item["text"]),
            escape_string(item["category"])
        )
        f.write(insert_query + '\n')

print('SQL файл сгенерирован.')
print('Скопируйте данные mySQL.sql и вставьте в базу')

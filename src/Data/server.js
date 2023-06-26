const mysql = require('mysql');
const readline = require('readline');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodstore'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Запрос
  rl.question('Введите SQL запрос (update,add, close): ', (query) => {
    if (query === 'update') {
      // код обновления данных
      connection.query('SELECT * FROM fooddata', (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        const data = JSON.stringify(results);
        const code = `const data = ${data};\n\nexport default data;`;
        fs.writeFileSync('./data.js', code, 'utf-8');
      });

      console.log('Данные обновлены успешно.');

    } else if (query === 'close') {
      connection.end();
      rl.close();
    }  else if (query === 'add') {
      // Запрос на добавление заведения
      rl.question('Введите тип продукта: ', (category) => {
        rl.question('Введите название продукта: ', (name) => {
          rl.question('Введите ссылку на картинку: ', (image) => {
            rl.question('Введите цену продукта: ', (price) => {
              rl.question('Введите текст продукта: ', (text) => {
    
                const addRestaurantQuery = `INSERT INTO fooddata (name, price, text, image, category) VALUES ('${name}', '${price}', '${text}', '${image}', '${category}')`;
    
            connection.query(addRestaurantQuery, (error, results) => {
              if (error) {
                console.error('Ошибка при выполнении запроса:', error);
                return;
              }
              console.log('Заведение успешно добавлено в базу данных.');
            });

          rl.close();
        });
      });
      });
    });
    });

    } else {
      // Выполнение обычного запроса
      connection.query(query, (error, results) => {
        if (error) {
          console.error('Error executing the query:', error);
          return;
        }
        console.log('Результаты запроса:');
        console.log(results);
      });
      rl.close();
    }
  });
});

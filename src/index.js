import fs from 'node:fs/promises';

(async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

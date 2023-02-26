export const dateFilters = [
  { name: "3 дня", id: 1 },
  { name: "Неделя", id: 2 },
  { name: "Месяц", id: 3 },
  { name: "Год", id: 4 },
];

export const filterTypes = [
  { name: "Все типы", type: "types" },
  { name: "Все сотрудники", type: "workers" },
  { name: "Все звонки", type: "calls" },
  { name: "Все источники", type: "sources" },
  { name: "Все оценки", type: "marks" },
  { name: "Все ошибки", type: "mistakes" },
];

export const typesFilters = [
  { name: "Все типы", id: 1 },
  { name: "Входящие", id: 2 },
  { name: "Исходящие", id: 3 },
];

export const workersFilters = [
  { name: "Все сотрудники", id: 1 },
  { name: "Константин К.", id: 2, avatar: "avatar.png" },
  { name: "Полина З.", id: 3, avatar: "avatar.png" },
];

export const callsFilters = [
  { name: "Все звонки", id: 1 },
  { name: "Все клиенты", id: 2 },
  { name: "Новые клиенты", id: 3 },
  { name: "Все исполнители", id: 4 },
  { name: "Через приложение", id: 5 },
  { name: "Прочие звонки", id: 6 },
];

export const sourcesFilters = [{ name: "Все источники", id: 1 }];

export const marksFilters = [
  { name: "Все оценки", id: 1 },
  { name: "Распознать", id: 2 },
  { name: "Скрипт не использован", id: 3 },
];

export const mistakesFilters = [
  { name: "Все ошибки", id: 1 },
  { name: "Приветствие", id: 2 },
  { name: "Имя", id: 3 },
  { name: "Цена", id: 4 },
  { name: "Скидка", id: 5 },
  { name: "Предзаказ", id: 6 },
  { name: "Благодарность", id: 7 },
  { name: "Стоп слова", id: 8 },
];

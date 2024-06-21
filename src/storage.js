const STORAGE_KEY = 'usersData'

export function getAllUsersData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
}

export function setUsersData(usersData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersData))
}

export function addUserData(userId, userData) {
  let usersData = getAllUsersData()
  usersData[userId] = userData
  setUsersData(usersData)
}

export function getUserData(userId) {
  let usersData = getAllUsersData()
  return usersData[userId] || {}
}

export function removeUserData(userId) {
  let usersData = getAllUsersData()
  delete usersData[userId]
  setUsersData(usersData)
}

//------------------------------//

// Проверка почты
export function getUserByEmail(email) {
  const usersData = getAllUsersData() 
  return Object.values(usersData).find(user => user.email === email)
}

// Получение номера карты
export function getUserByCardNumber(cardNumber) {
  const usersData = getAllUsersData() 
  return Object.values(usersData).find(user => user.cardNumber === cardNumber)
}

// Получение полного имени
export function getUserByFullName(fullName) {
  const usersData = getAllUsersData()
  return Object.values(usersData).find(user => user.fullName === fullName)
}

// Увеличение счетчика посещений
export function increaseVisitsCounter(email) {
  const usersData = getAllUsersData()
  const user = Object.values(usersData).find(user => user.email === email)

  if (user) {
    user.visitsCounter++
    setUsersData(usersData)
  }
}

export function addBooks(userId, title, author) {
  let usersData = getAllUsersData()

  usersData[userId].selectedBooks = usersData[userId].selectedBooks || []

  let newBook = {
    titleBooks: title,
    authorBook: author
  }

  let existingBook = usersData[userId].selectedBooks.find(book => book.titleBooks === title && book.authorBook === author)

  if (!existingBook) {
    usersData[userId].selectedBooks.push(newBook)
    usersData[userId].books += 1
  } else {
    usersData[userId].selectedBooks = usersData[userId].selectedBooks.filter(book => book.titleBooks !== title || book.authorBook !== author)
    usersData[userId].books -= 1
  }

  setUsersData(usersData)

  return usersData[userId]
}
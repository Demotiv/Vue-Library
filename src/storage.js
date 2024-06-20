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

export function getUserByEmail(email) {
  const usersData = getAllUsersData() 
  return Object.values(usersData).find(user => user.email === email)
}

export function getUserCardNumber(cardNumber) {
  const usersData = getUserData() 
  return Object.values(usersData).find(user => user.cardNumber === cardNumber)
}

export function getUserFullName(fullName) {
  const usersData = getUserData()
  return Object.values(usersData).find(user => user.fullName === fullName)
}

export function removeUserData(userId) {
  let usersData = getAllUsersData()
  delete usersData[userId]
  setUsersData(usersData)
}
const STORAGE_KEY = 'usersData'

export function getUsersData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
}

export function setUsersData(usersData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usersData))
}

export function addUserData(userId, userData) {
  let usersData = getUsersData()
  usersData[userId] = userData
  setUsersData(usersData)
}

export function getUserData(userId) {
  let usersData = getUsersData()
  return usersData[userId] || {}
}

export function getUserByEmail(email) {
  const usersData = getUsersData() 
  return Object.values(usersData).find(user => user.email === email)
} 

export function removeUserData(userId) {
  let usersData = getUsersData()
  delete usersData[userId]
  setUsersData(usersData)
}
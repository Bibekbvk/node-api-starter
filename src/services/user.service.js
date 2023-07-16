const users = [
  { id: 'usr_1', email: 'bibek@example.com', name: 'Bibek Bhattara', role: 'admin' }
];

export function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

export function findUserById(id) {
  return users.find(u => u.id === id);
}

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User) {
  return user;
}

const user: User = createUser({
  id: 1,
  name: "john doe",
  role: UserRole.Admin,
  contact: ["john@gmail.com", "111-222-333"],
});

console.log(user);

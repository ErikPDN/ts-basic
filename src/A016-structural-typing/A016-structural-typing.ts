type VerifyUser = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUser = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const user1: User = {
  username: "Erik",
  password: "123",
};

const user2: User = {
  username: "João",
  password: "123",
};

console.log(verifyUser(user1, user2)); // false

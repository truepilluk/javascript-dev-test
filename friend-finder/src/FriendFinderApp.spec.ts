/*
Imagine you're writing a simple app to help people find friends with similar interests.

The initial requirements for this app are as follows:

1) The ability for a user to log into the app:

- If the user does not exist an error of "User not found" should be thrown
- If the user exists but the password is incorrect then an error of "Incorrect password" should be thrown
- If the username and password are correct then a Session should be returned to the user.
- If the user already has a session, this should be replaced with the new session.
- Sessions should record the creation time as this will be used later to "authenticate" the session

2) The ability to find other users with similar likes. The findFriends function should return
all Users who match the complete list of likes provided:

- If the session is more than an hour old an error of "Invalid Session" should be thrown.
- If no users match all likes, an empty array should be returned.
- Likes should be considered to match even if the case does not match e.g. "food" matches with "FOOD", and "Food" etc.


Extension task:
3) Found friends should be sorted by number of overlapping likes with the most overlapped first

The task should be completed using TDD. The aim of the task is to see how you work through problems
and what sort of code you write, not to see if you can complete the exercise.
The exercise will be time-boxed and is designed to ensure you don't run out of things to do.
It is better to do less of the exercise well than to rush and do more but sacrifice code quality.

Tests have been configured to use `jest` but you may install a different testing library if required.
You can run the default tests using `yarn test` or `npm run test`.
*/

import { User } from "./User";

const TEST_USERS: User[] = [
  {
    "username": "alice",
    "firstName": "Alice",
    "lastName": "Apples",
    "password": "abc123",
    "likes": ["Food", "Drink", "Oxygen"]
  },
  {
    "username": "bob",
    "firstName": "Bob",
    "lastName": "Uncle",
    "password": "password",
    "likes": ["TDD", "FOOD", "NASA"]
  },
  {
    "username": "charlie",
    "firstName": "Charlie",
    "lastName": "Chaplin",
    "password": "23051980",
    "likes": ["food", "drink", "oxygen"]
  },
  {
    "username": "dorris",
    "firstName": "Dorris",
    "lastName": "Dotty",
    "password": "Password123!",
    "likes": ["TDD", "fo0d", "horses"]
  }
];

// --- WRITE TESTS BELOW HERE --- //

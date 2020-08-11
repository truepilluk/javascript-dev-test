import { User } from "./User";

interface Session {
  id: number,
  user: User,
  created: Date,
}

export class FriendFinderApp {
  users: User[];
  sessions: Map<User, Session>;

  constructor(users: User[]) {

  }

  async login(username: string, password: string) {
  }

  async findFriends(session: Session, likes: string[]) {

  }
}


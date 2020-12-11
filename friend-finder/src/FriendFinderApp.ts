import { Session } from "./Session";
import { User } from "./User";

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

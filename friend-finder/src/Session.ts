import { v4 as uuidV4 } from "uuid";

import { User } from "./User";

export class Session {
  public readonly id: number = uuidV4();
  public readonly user: User;
  public readonly created: Date;

  constructor(user: User) {
  }
}

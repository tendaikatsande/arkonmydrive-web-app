import { UserRole } from "../constants/user_roles.enum";
import { UserStatus } from "../constants/user_status.enum";

export const FakeDb = {
  users: [
    {
      id: "1",
      firstName: "admin",
      lastName: "admin",
      email: "admin@example.com",
      password: "password",
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      lastLogin: new Date(),
      createdOn: new Date()
    },
    {
      id: "2",
      firstName: "user",
      lastName: "user",
      email: "user@example.com",
      password: "password",
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
      lastLogin: new Date(),
      createdOn: new Date()
    },

    {
      id: "3",
      firstName: "user",
      lastName: "user",
      email: "user2@example.com",
      password: "password",
      role: UserRole.USER,
      status: UserStatus.INACTIVE,
      lastLogin: new Date(),
      createdOn: new Date()
    },

    {
      id: "4",
      firstName: "user",
      lastName: "user",
      email: "user3@example.com",
      password: "password",
      role: UserRole.USER,
      status: UserStatus.BLOCKED,
      lastLogin: new Date(),
      createdOn: new Date()
    }

  ]
}
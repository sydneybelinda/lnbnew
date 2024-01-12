import { authPlugins } from "mysql2"
import {DefaultSession, DefaultUser } from "next-auth"


declare module "next-auth" {
    interface Session {
        user: {
            username: string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        username: string,
    }
}
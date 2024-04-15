import {db} from "@/lib/db";


export const getUserByEmail = async (email: string) => {
    try {
        return await db.user.findUnique({where: {email}});
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        return await db.user.findUnique({where: {id}});
    } catch (e) {
        console.error(e);
        return null;
    }
}

export const createUser = async (email: string, password: string, name: string, username: string) => {
    try {
        type UserCreateInput = {
            email: string;
            password: string;
            name: string;
            username: string;
        }
        return await db.user.create({data: {email, password, username, name} as UserCreateInput});
    } catch (e) {
        console.error(e);
        return null;
    }
}
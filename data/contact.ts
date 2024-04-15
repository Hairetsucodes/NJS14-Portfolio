'use server'
import {db} from "@/lib/db";

export const insertContact = async (fullName: string, email: string, inquiry: string) => {
    await db.contactInfo.create({
        data: {
            fullname: fullName,
            email: email,
            inquiry: inquiry
        }
    });
}
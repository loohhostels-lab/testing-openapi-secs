import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

const addUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
});


const getUser = z.object({
    email: z.string()
})

// get type of getUser
type GetUser = z.infer<typeof getUser>;
type AddUserSchema = z.infer<typeof addUserSchema>;


export { type AddUserSchema, addUserSchema, getUser, type GetUser }

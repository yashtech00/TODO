import z from "zod";


export const signupInput = z.object({
    name:z.string().min(4).max(100),
    email:z.string().email(),
    password:z.string().min(6).max(100),
}) 

export const signinInput = z.object({
    email:z.string().email(),
    password:z.string().min(6).max(100),
})

export const createdInput = z.object({
    title:z.string(),
    content:z.string(),
    status:z.string(),
})

export const updatedInput = z.object({
    title:z.string(),
    content:z.string(),
    status:z.string(),
})

export type SignupInput = z.infer<typeof signupInput> 
export type SigninInput = z.infer<typeof signinInput> 
export type CreatedInput = z.infer<typeof createdInput> 
export type UpdatedInput = z.infer<typeof updatedInput> 
import z from "zod";
export declare const signupInput: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createdInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    status: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: string;
    title: string;
    content: string;
}, {
    status: string;
    title: string;
    content: string;
}>;
export declare const updatedInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    status: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: string;
    title: string;
    content: string;
}, {
    status: string;
    title: string;
    content: string;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreatedInput = z.infer<typeof createdInput>;
export type UpdatedInput = z.infer<typeof updatedInput>;

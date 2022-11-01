import { Length, IsEmail, Min } from "class-validator";
import { PasswordMixin } from "../../shared/passwordInput";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./IsEmailAlreadyExist";

@InputType()
export class RegisterInput extends PasswordMixin(class {}) {
    @Field()
    @Length(1, 255)
    firstName: string;

    @Field()
    @Length(1,255)
    lastName: string;

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({message: 'Email already in use.'})
    email: string;

    @Field()
    @Min(5)
    password: string;
}
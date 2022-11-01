// import { Min } from "class-validator";
import { PasswordMixin } from "../../shared/passwordInput";
import {Field, InputType} from "type-graphql";

@InputType()
export class ChangePasswordInput extends PasswordMixin(class {}){
    @Field()
    token: string;

    @Field()
    // @Min(5)
    password: string;
}
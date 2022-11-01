import { Query, Resolver, Ctx} from "type-graphql";
import { User } from "../../entity/User";
import { MyContext } from "src/types/MyContext";

@Resolver()
export class MeResolver {
    @Query(() => User, { nullable: true })
    async me(@Ctx() ctx: MyContext): Promise<User | null> {
        if (!ctx.req.session!.userId) {
            return null;
        }

        console.log(ctx.req.session!.userId);

        return User.findOneBy(ctx.req.session!.userId);
    }
}
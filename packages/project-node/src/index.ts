import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { createConnection } from "typeorm";
import 'reflect-metadata';
import { buildSchema } from "type-graphql";
import session from 'express-session';
import connectRedis from "connect-redis";
import { redis } from "./redis"; 
import cors from "cors";
// import { LoginResolver } from "./modules/user/Login";
// import { RegisterResolver } from "./modules/user/Register";

const main = async() => {
        await createConnection();

        const schema = await buildSchema({
            resolvers: [__dirname + "/modules/**/*.ts"],
            authChecker: ({ context: {req }}) => {
                return !!req.session.userId
            }
        });

        const apolloServer = new ApolloServer({ 
            schema,
            context: ({ req, res }: any ) => ({ req, res })
         });

        const app = Express();

        const RedisStore = connectRedis(session);

        app.use(
            cors({
            credentials: true,
            origin: "http://localhost:3000"
        }));

        app.use(
            session({
                store: new RedisStore({
                    client: redis as any,
                    disableTouch: true,
                }),
                name: "qid",
                secret: "abcdefg123456",
                resave: false,
                saveUninitialized: false,
                cookie: {
                    httpOnly: true,
                    secure: false,
                    maxAge: 1000 * 60 * 60 * 24 * 7 * 365, //7years
                    sameSite: 'lax' 
                }
            })
        )

        await apolloServer.start();

        apolloServer.applyMiddleware({ app });

        app.listen(4000, () => {
            console.log("server started on http://localhost:4000/graphql");
        });
};

main();
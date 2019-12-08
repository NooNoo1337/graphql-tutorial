# Steps
Here will be described project history (main changes) step by step.

## Step №1
Init project

## Step №2
1) Add config for express server (app.js);
2) creat first GraphQl type (Movie) with described fields;
3) creat root Query;
4) creat root graphql schema.

## Step №3
1) Add mock films data;
2) tested mock query in graphiql.

## Step №4
1) Add GraphQl type (Director);
2) add dependence between types;

## Step №5
1) Studied GraphQLList type;
2) add api to get all films;
3) add api to get all directors;

## Step №6
1) Create DataBase in mLab;
2) migrate directors and movies to DataBase.

## Step №7
1) Connect to DataBase;
2) add mongoose models (Movies, Directors);
3) update resolvers.

## Step №8
1) Create Mutation with addDirector, addMovie fields;
2) add Mutation in root Query;

## Step №9
1) Add update and delete methods for movies and directors. All CRUD operations are done;
2) add nonNull values check;


interface User {
  firstName: string;
  lastName: string;
}

const resolvers = {
  Query: {
    testString(): string {
      return "Hello!";
    },
    me(obj: object, args: {}): User {
      return { firstName: "Gregor", lastName: "Ganss" };
    },
    userById(obj: object, args: { id: string }): User {
      return { firstName: "Hector " + args.id, lastName: "Identy" };
    },
  },
  Mutation: {
    updateUser(obj: object, args: { id: string }): User {
      console.log("updateUser", args);
      return { firstName: "Esteban " + args.id, lastName: "Mutación" };
    },
  },
  User: {
    firstName(obj: User, args: {}): string {
      return obj.firstName;
    },
  },
};

export default resolvers;

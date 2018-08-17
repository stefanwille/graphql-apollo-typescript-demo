class User {
  public firstName = "";
  public lastName = "";
}

const resolvers = {
  Query: {
    testString() {
      return "Hello!";
    },
    me(obj: object, args: {}) {
      return { firstName: "Gregor", lastName: "Ganss" };
    },
    userById(obj: object, args: { id: string }) : User {
      return { firstName: "Hector " + args.id, lastName: "Identy" };
    }
  },
  Mutation: {
    updateUser(obj: object, args: |{ id: string }) : User{
      console.log("updateUser", args);
      return { firstName: "Esteban " + args.id, lastName: "Mutación" };
    }
  },
  User: {
    firstName(obj: User, args: {}) {
      return obj.firstName;
    }
  }
};

export default resolvers;

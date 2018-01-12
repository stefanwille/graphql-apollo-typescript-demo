const resolvers = {
  Query: {
    testString() {
      return "Hello!";
    },
    me(obj, args) {
      return { firstName: "Gregor", lastName: "Ganss" };
    },
    userById(obj, args) {
      return { firstName: "Hector " + args.id, lastName: "Identy" };
    }
  },
  Mutation: {
    updateUser(obj, args) {
      console.log("updateUser", args);
      return { firstName: "Esteban " + args.id, lastName: "Mutación" };
    }
  },
  User: {
    firstName(obj, args) {
      return obj.firstName;
    }
  }
};

module.exports = resolvers;

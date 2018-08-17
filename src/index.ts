import express from "express";

import apolloServer from "./apolloServer";

const PORT = 4000;
var app = express();
apolloServer.applyMiddleware({ app });
app.listen(PORT, () => {
  console.log(`Server ready at port ${PORT}`);
});

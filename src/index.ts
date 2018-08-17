import { ServerInfo } from "apollo-server";
import apolloServer from "./apolloServer";

const PORT = 4000;
apolloServer.listen(PORT).then(({ url }: ServerInfo) => {
  console.log(`Server listening at ${url}`);
});

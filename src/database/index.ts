import { createConnection, getConnectionOptions } from "typeorm";

interface Ioptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as Ioptions
  newOptions.host = "database";
  createConnection({
    ...options,
  });
})
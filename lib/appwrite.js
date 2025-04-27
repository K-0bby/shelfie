import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("680e217d002bb6a7cece")
  .setPlatform("dev.techole.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);

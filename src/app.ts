import { Extension } from "gnode-api";
import { say2 } from "./say2.js";

const extensionInfo = {
  name: "My Extension",
  description: "My first G-Node extension",
  version: "0.1",
  author: "Your name",
};

const ext = new Extension(extensionInfo);
ext.run();

ext.on("click", () => {
  console.log("G-Earth button clicked");
});

const test: string = "Test";
console.log(test);

function say(test: number) {
  console.log(test);
}

say(1337);
say2("rocawear");

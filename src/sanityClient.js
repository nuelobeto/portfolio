import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import config from "./config";

export const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: "2022-04-10",
  useCdn: true,
  token: config.token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

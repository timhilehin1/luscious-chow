import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	useCdn: false, // set to `false` to bypass the edge cache
	ignoreBrowserTokenWarning: true,
};
const client = createClient(config);

export default client;

import { getCloudflareContext } from "@opennextjs/cloudflare";

import { createDb } from "@/db/create-db";
import type { Database } from "@/db/create-db";

type AppBindings = CloudflareEnv & {
	DB: D1Database;
};

export { createDb };
export type { Database };

let cachedDb: Database | null = null;

export function getDb(): Database {
	if (cachedDb) {
		return cachedDb;
	}
	const { env } = getCloudflareContext();
	cachedDb = createDb((env as AppBindings).DB);
	return cachedDb;
}

import * as dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./db/data-source";
import "reflect-metadata";

function normalizePort(val: any) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}
	return false;
}

dotenv.config();
const PORT = normalizePort(process.env.PORT || 3000);

AppDataSource.initialize()
	.then(async () => {
		console.log("Database connected successfully");
	})
	.catch((err) => console.error(err));

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

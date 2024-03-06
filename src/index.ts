import * as dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./db/data-source";

dotenv.config();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
	.then(async () => {
		console.log("Database connected successfully");
	})
	.catch((err) => console.error(err));

app.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

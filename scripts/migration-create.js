#! /usr/bin/env node

// const yargs = require("yargs");
import yargs from "yargs";

const { execSync } = require("child_process");

// parse the cmd line arguments
const {
	_: [name],
	path,
} = yargs.argv;

// Construct the migration path
const migrationPath = `src/db/migrations/${name}`;

// Run typeorm script command
execSync(`typeorm migration:create ${migrationPath}`, { stdio: "inherit" });

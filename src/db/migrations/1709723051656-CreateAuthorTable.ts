import { MigrationInterface, Table, QueryRunner } from "typeorm";
import { AUTHORS } from "../../constants/dbTable";

export class CreateAuthorTable1709723051656 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: AUTHORS,
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						generationStrategy: "increment",
					},
					{
						name: "name",
						type: "varchar",
						length: "255",
						isNullable: false,
					},
					{
						name: "email",
						type: "varchar",
						length: "255",
						isNullable: false,
						isUnique: true,
					},
					{
						name: "bio",
						type: "text",
						length: "255",
						isNullable: true,
					},
					{
						name: "image",
						type: "varchar",
						length: "255",
						isNullable: true,
					},
					{
						name: "createdAt",
						type: "datetime",
						default: "now()",
						isNullable: true,
					},
					{
						name: "updatedAt",
						type: "datetime",
						default: "now()",
						isNullable: true,
					},
				],
			}),
			true
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(AUTHORS);
	}
}

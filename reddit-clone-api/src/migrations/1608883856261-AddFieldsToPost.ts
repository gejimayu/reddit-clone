import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFieldsToPost1608883856261 implements MigrationInterface {
  name = 'AddFieldsToPost1608883856261';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" ADD "text" character varying NOT NULL`);
    await queryRunner.query(`ALTER TABLE "post" ADD "points" integer NOT NULL DEFAULT 0`);
    await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b"`);
    await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "creatorId" SET NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "post" ADD CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b"`);
    await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "creatorId" DROP NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "post" ADD CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "points"`);
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "text"`);
  }
}

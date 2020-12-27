import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewColumnPointToPostUpvoters1609063848342 implements MigrationInterface {
  name = 'AddNewColumnPointToPostUpvoters1609063848342';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_c7c521aba53a8aaf4a61975971"`);
    await queryRunner.query(`DROP INDEX "IDX_5b7f31fe7d788c72c92c84f655"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" ADD "point" integer NOT NULL`);
    await queryRunner.query(`CREATE INDEX "IDX_c7c521aba53a8aaf4a61975971" ON "post_upvoters" ("postId") `);
    await queryRunner.query(`CREATE INDEX "IDX_5b7f31fe7d788c72c92c84f655" ON "post_upvoters" ("userId") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "IDX_5b7f31fe7d788c72c92c84f655"`);
    await queryRunner.query(`DROP INDEX "IDX_c7c521aba53a8aaf4a61975971"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" DROP COLUMN "point"`);
    await queryRunner.query(`CREATE INDEX "IDX_5b7f31fe7d788c72c92c84f655" ON "post_upvoters" ("userId") `);
    await queryRunner.query(`CREATE INDEX "IDX_c7c521aba53a8aaf4a61975971" ON "post_upvoters" ("postId") `);
  }
}

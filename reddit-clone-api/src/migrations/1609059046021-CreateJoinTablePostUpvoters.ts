import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateJoinTablePostUpvoters1609059046021 implements MigrationInterface {
  name = 'CreateJoinTablePostUpvoters1609059046021';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post_upvoters" ("postId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_541d404cbfd0659196ece7d23d0" PRIMARY KEY ("postId", "userId"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_c7c521aba53a8aaf4a61975971" ON "post_upvoters" ("postId") `);
    await queryRunner.query(`CREATE INDEX "IDX_5b7f31fe7d788c72c92c84f655" ON "post_upvoters" ("userId") `);
    await queryRunner.query(
      `ALTER TABLE "post_upvoters" ADD CONSTRAINT "FK_c7c521aba53a8aaf4a61975971c" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_upvoters" ADD CONSTRAINT "FK_5b7f31fe7d788c72c92c84f6554" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post_upvoters" DROP CONSTRAINT "FK_5b7f31fe7d788c72c92c84f6554"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" DROP CONSTRAINT "FK_c7c521aba53a8aaf4a61975971c"`);
    await queryRunner.query(`DROP INDEX "IDX_5b7f31fe7d788c72c92c84f655"`);
    await queryRunner.query(`DROP INDEX "IDX_c7c521aba53a8aaf4a61975971"`);
    await queryRunner.query(`DROP TABLE "post_upvoters"`);
  }
}

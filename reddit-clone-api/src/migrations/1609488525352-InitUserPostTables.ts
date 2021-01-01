import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitUserPostTables1609488525352 implements MigrationInterface {
  name = 'InitUserPostTables1609488525352';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post" ("id" SERIAL NOT NULL, "creatorId" integer NOT NULL, "title" character varying(200) NOT NULL, "text" character varying NOT NULL, "points" integer NOT NULL DEFAULT 0, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(200) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_upvoters" ("postId" integer NOT NULL, "userId" integer NOT NULL, "point" integer NOT NULL, CONSTRAINT "PK_541d404cbfd0659196ece7d23d0" PRIMARY KEY ("postId", "userId"))`,
    );
    await queryRunner.query(`ALTER TABLE "post_upvoters" DROP COLUMN "point"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" ADD "point" integer NOT NULL`);
    await queryRunner.query(`CREATE INDEX "IDX_c7c521aba53a8aaf4a61975971" ON "post_upvoters" ("postId") `);
    await queryRunner.query(`CREATE INDEX "IDX_5b7f31fe7d788c72c92c84f655" ON "post_upvoters" ("userId") `);
    await queryRunner.query(
      `ALTER TABLE "post" ADD CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
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
    await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_9e91e6a24261b66f53971d3f96b"`);
    await queryRunner.query(`DROP INDEX "IDX_5b7f31fe7d788c72c92c84f655"`);
    await queryRunner.query(`DROP INDEX "IDX_c7c521aba53a8aaf4a61975971"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" DROP COLUMN "point"`);
    await queryRunner.query(`ALTER TABLE "post_upvoters" ADD "point" integer NOT NULL`);
    await queryRunner.query(`DROP TABLE "post_upvoters"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "post"`);
  }
}

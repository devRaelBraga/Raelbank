/*
  Warnings:

  - You are about to alter the column `receiver_acc` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `sender_acc` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `acc_num` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.
  - You are about to alter the column `cardholder_acc` on the `DebitCard` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" REAL NOT NULL,
    "sender_acc" BIGINT NOT NULL,
    "receiver_acc" BIGINT NOT NULL,
    CONSTRAINT "Transaction_sender_acc_fkey" FOREIGN KEY ("sender_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_receiver_acc_fkey" FOREIGN KEY ("receiver_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("date", "id", "receiver_acc", "sender_acc", "value") SELECT "date", "id", "receiver_acc", "sender_acc", "value" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE TABLE "new_User" (
    "acc_num" BIGINT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 10000
);
INSERT INTO "new_User" ("acc_num", "balance", "email", "name", "password") SELECT "acc_num", "balance", "email", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_DebitCard" (
    "num_card" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardholder_acc" BIGINT NOT NULL,
    "expiration" DATETIME NOT NULL,
    "CVC" INTEGER NOT NULL,
    CONSTRAINT "DebitCard_cardholder_acc_fkey" FOREIGN KEY ("cardholder_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DebitCard" ("CVC", "cardholder_acc", "expiration", "num_card") SELECT "CVC", "cardholder_acc", "expiration", "num_card" FROM "DebitCard";
DROP TABLE "DebitCard";
ALTER TABLE "new_DebitCard" RENAME TO "DebitCard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

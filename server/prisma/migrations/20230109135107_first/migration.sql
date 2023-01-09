-- CreateTable
CREATE TABLE "User" (
    "acc_num" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" REAL NOT NULL,
    "sender_acc" INTEGER NOT NULL,
    "receiver_acc" INTEGER NOT NULL,
    CONSTRAINT "Transaction_sender_acc_fkey" FOREIGN KEY ("sender_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_receiver_acc_fkey" FOREIGN KEY ("receiver_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DebitCard" (
    "num_card" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardholder_acc" INTEGER NOT NULL,
    "expiration" DATETIME NOT NULL,
    "CVC" INTEGER NOT NULL,
    CONSTRAINT "DebitCard_cardholder_acc_fkey" FOREIGN KEY ("cardholder_acc") REFERENCES "User" ("acc_num") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

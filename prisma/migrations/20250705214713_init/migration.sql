-- CreateTable
CREATE TABLE "Guestbook" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Guestbook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AlimentaireProfile" ADD CONSTRAINT "AlimentaireProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

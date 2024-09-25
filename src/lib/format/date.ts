import { format } from "date-fns";
import { fr } from "date-fns/locale";

export const formatDateAndTime = (date: Date, p0: string) => {
  return format(date, "MMMM d, yyyy '•' h:mm aa");
};

export const formatDate = (date: Date) => {
  return format(date, "d MMMM yyyy", { locale: fr });
};

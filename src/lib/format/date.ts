import { format } from "date-fns";
import { fr } from "date-fns/locale";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const formatDate = (date: Date, p0?: string) => {
  return format(date, "d MMMM yyyy", { locale: fr });
};

import { Footer } from "@/features/layout/Footer";
import { FloatingLegalFooter } from "@/features/legal/FloatingLegalFooter";
import { Header } from "@/features/layout/Header";
import type { PropsWithChildren } from "react";

export default function RouteLayout(props: PropsWithChildren) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="mt-20 min-h-full flex-1">{props.children}</div>
      <Footer />
      <FloatingLegalFooter />
    </div>
  );
}

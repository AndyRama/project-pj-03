"use client";

import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import {
	Layout,
	LayoutActions,
	LayoutHeader,
	LayoutTitle,
	LayoutContent
} from "@/features/page/layout";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppointmentPage() {

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "1rdv" });
			cal("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": " #ff7f00" },
					dark: { "cal-brand": "#fafafa" }
				},
				hideEventTypeDetails: true,
				layout: "month_view"
			});
		})();
	}, []);


	return (
		<Layout>
			<LayoutHeader>
				<LayoutTitle>Rendez-vous</LayoutTitle>
			</LayoutHeader>
			<LayoutActions className="flex gap-2">
				<Link href="/account/checkout/booking">
					<Button variant="outline">
						<ArrowLeft className="size-4" />
						Retour
					</Button>
				</Link>
			</LayoutActions>
			<LayoutContent>
				<Cal
					namespace="1rdv"
					calLink="unlcoaching/1rdv"
					style={{ width: "100%", height: "100%", marginTop: "20px", overflow: "scroll" }}
					config={{ layout: "month_view" }}
				/>
			</LayoutContent>
		</Layout>
	);
}

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
			const cal = await getCalApi({ namespace: "consulation-visio-unlcoaching" });
			cal("ui", {
				cssVarsPerTheme: {
					light: { "cal-brand": " #ff7f00" },
					dark: { "cal-brand": "#fafafa" }
				},
				hideEventTypeDetails: false,
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
				<Link href="/account/booking/calendar">
					<Button variant="outline">
						<ArrowLeft className="size-4" />
						Retour
					</Button>
				</Link>
			</LayoutActions>
			<LayoutContent>
				<Cal
					namespace="consulation-visio-unlcoaching"
					calLink="dr-sarah-johnson/consulation-visio-unlcoaching"
					style={{ width: "100%", height: "100%", marginTop: "20px", overflow: "scroll" }}
					config={{ layout: "month_view" }}
				/>
			</LayoutContent>
		</Layout>
	);
}

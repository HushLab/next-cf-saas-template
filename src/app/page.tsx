import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Database } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 px-4">
			{/* Hero Section */}
			<div className="max-w-3xl text-center space-y-6">
				<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
					Build Your Next SaaS on the Edge
				</h1>
				<p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
					A clean, high-performance SaaS template powered by Next.js 16, Cloudflare Workers, Better Auth, and Drizzle ORM.
				</p>
				<div className="flex flex-wrap justify-center gap-4 pt-4">
					<Link
						className={cn(buttonVariants({ size: "lg" }), "gap-2")}
						href="/chat"
					>
						Get Started
						<ArrowRight className="size-4" />
					</Link>
					<Link
						className={buttonVariants({ variant: "outline", size: "lg" })}
						href="/pricing"
					>
						View Pricing
					</Link>
				</div>
			</div>

			{/* Features Grid Section */}
			<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 md:mt-28">
				<div className="flex flex-col items-center md:items-start space-y-3 p-6 border rounded-xl bg-card shadow-sm">
					<div className="p-3 bg-primary/10 text-primary rounded-lg">
						<Zap className="size-6" />
					</div>
					<h3 className="text-xl font-bold">Edge Native</h3>
					<p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed">
						Deployed globally on Cloudflare Workers & Pages. Enjoy ultra-low latency response times (TTFB) and zero server maintenance.
					</p>
				</div>

				<div className="flex flex-col items-center md:items-start space-y-3 p-6 border rounded-xl bg-card shadow-sm">
					<div className="p-3 bg-primary/10 text-primary rounded-lg">
						<ShieldCheck className="size-6" />
					</div>
					<h3 className="text-xl font-bold">Better Auth</h3>
					<p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed">
						Complete and secure authentication framework. Email/password authentication and Google OAuth are ready to use.
					</p>
				</div>

				<div className="flex flex-col items-center md:items-start space-y-3 p-6 border rounded-xl bg-card shadow-sm">
					<div className="p-3 bg-primary/10 text-primary rounded-lg">
						<Database className="size-6" />
					</div>
					<h3 className="text-xl font-bold">Drizzle & D1</h3>
					<p className="text-sm text-muted-foreground text-center md:text-left leading-relaxed">
						Edge-native Drizzle ORM connected to Cloudflare D1 SQLite database. Simple schema migrations and fast query performance.
					</p>
				</div>
			</div>
		</div>
	);
}

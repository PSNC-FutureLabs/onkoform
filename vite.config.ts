import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
	if (command === "serve") {
		return {
			plugins: [react()],
			base: "/onkoform/",
		};
	} else {
		return {
			plugins: [react()],
			base: "/onkoform/",
		};
	}
});

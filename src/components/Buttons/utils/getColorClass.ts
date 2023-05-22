export const getColorClass = (color: string) => {
	switch (color) {
		case "primary":
			return "btn-primary";
		case "secondary":
			return "btn-secondary";
		case "success":
			return "btn-success";
		case "warning":
			return "btn-warning";
		case "error":
			return "btn-error";
		case "info":
			return "btn-info";
		case "accent":
			return "btn-accent";
		default:
			return "btn-primary";
	}
};

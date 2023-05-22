export default interface ButtonProps {
	title: string;
	color:
		| "primary"
		| "secondary"
		| "success"
		| "warning"
		| "error"
		| "info"
		| "accent";
	actionType?: string;
}

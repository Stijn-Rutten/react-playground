export interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "succes";
  onClick: () => void;
}

export default function Button({
  children,
  onClick,
  color = "primary",
}: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

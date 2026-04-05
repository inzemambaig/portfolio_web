type Props = {
  label: string;
};

export default function TechTag({ label }: Props) {
  return (
    <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {label}
    </span>
  );
}

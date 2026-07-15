export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <h2 className="mb-8 text-sm font-medium tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

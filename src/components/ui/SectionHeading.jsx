export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-leaf' : 'text-forest'}`}>{eyebrow}</span>
      )}
      <h2 className={`text-display-md ${light ? 'text-white' : 'text-charcoal-950'}`}>{title}</h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/80' : 'text-charcoal/80'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

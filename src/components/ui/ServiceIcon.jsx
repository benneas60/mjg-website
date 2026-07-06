import { Trees, BrickWall, Leaf, Snowflake } from 'lucide-react'
import LawnMowerIcon from './icons/LawnMowerIcon'
import MulchMoundIcon from './icons/MulchMoundIcon'

const LUCIDE_ICONS = {
  Trees,
  BrickWall,
  Leaf,
  Snowflake,
}

const CUSTOM_ICONS = {
  LawnMower: LawnMowerIcon,
  MulchMound: MulchMoundIcon,
}

export default function ServiceIcon({ name, className = 'w-6 h-6' }) {
  const Custom = CUSTOM_ICONS[name]
  if (Custom) return <Custom className={className} />

  const Icon = LUCIDE_ICONS[name] || Trees
  return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />
}

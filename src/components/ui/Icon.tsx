import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIcon, type IconName } from '../../lib/icons'

interface IconProps {
  name: IconName
  /** Pixel size; maps to a fixed width/height so layout never shifts. */
  size?: number
  className?: string
  spin?: boolean
  title?: string
}

/**
 * Single entry point for all iconography.
 *
 * Wrapping FontAwesomeIcon means size units and accessibility defaults are
 * consistent everywhere, and swapping the icon library later touches one file.
 */
export function Icon({ name, size = 16, className, spin, title }: IconProps) {
  return (
    <FontAwesomeIcon
      icon={getIcon(name)}
      className={className}
      spin={spin}
      style={{ width: size, height: size }}
      title={title}
      aria-hidden={title ? undefined : true}
    />
  )
}

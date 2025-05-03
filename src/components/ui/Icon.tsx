
import * as Icons from "lucide-react";
import { SVGProps } from "react";

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  fallback?: string;
  color?: string;
} & SVGProps<SVGSVGElement>;

const Icon = ({
  name,
  size = 24,
  strokeWidth = 2,
  className = "",
  fallback = "CircleAlert",
  color,
  ...props
}: IconProps) => {
  const IconComponent = Icons[name as keyof typeof Icons] || Icons[fallback];

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      color={color}
      {...props}
    />
  );
};

export default Icon;

import classNames from "classnames";
import Image from "next/image";
import { ComponentProps, useEffect, useState } from "react";

const iconFetchingRequest: Record<string, Promise<string>> = {};
const iconCache: Record<string, string> = {};

export type IconBaseProps = {
  name: string;
  size: number;
  color?: string;
  alt?: string;
};
type IconProps = IconBaseProps & ComponentProps<"span">;

export function Icon({
  name,
  alt,
  size = 24,
  color,
  role,
  onClick,
  className,
  ...props
}: IconProps) {
  const [innerHTML, setInnerHTML] = useState<string | undefined>(
    iconCache[name]
  );

  useEffect(() => {
    if (iconCache[name]) {
      setInnerHTML(iconCache[name]);
      return;
    }

    let ignore = false;

    async function setIcon() {
      if (iconFetchingRequest[name] === undefined) {
        iconFetchingRequest[name] = fetchIcon(name);
      }

      try {
        const data = await iconFetchingRequest[name];

        if (!ignore) {
          iconCache[name] = data;
          setInnerHTML(iconCache[name]);
        }
      } catch {}
    }

    setIcon();

    return () => {
      ignore = true;
    };
  }, [innerHTML, name]);

  return (
    <span
      style={{
        width: size,
        height: size,
      }}
      role={role ?? onClick ? "button" : undefined}
      className={classNames("inline-block", className)}
      {...props}
    >
      {innerHTML ? (
        <span
          style={{
            width: size,
            height: size,
            color,
          }}
          aria-label={alt}
          aria-hidden={innerHTML == null || alt == null ? true : undefined}
          role={alt == null ? "presentation" : "img"}
          dangerouslySetInnerHTML={
            innerHTML ? { __html: innerHTML } : undefined
          }
          className="inline-block"
        />
      ) : (
        <Image
          alt={alt ?? ""}
          role={alt ? undefined : "presentation"}
          src={getIconUrl(name)}
          width={size}
          height={size}
        />
      )}
    </span>
  );
}

async function fetchIcon(name: string) {
  const response = await fetch(getIconUrl(name));
  return response.text();
}

export function getIconUrl(name: string) {
  return `/icons/${name}.svg`;
}

function isMonoIcon(name: string) {
  return name.endsWith("-mono");
}

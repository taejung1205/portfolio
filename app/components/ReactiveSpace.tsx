import { Space } from "@mantine/core";

/* default width, height를 정하고, screenwidth가 
각 breakpoint 이하일때 overwrite합니다. */
export function ReactiveSpace({
  width,
  height,
  mdWidth,
  mdHeight,
  smWidth,
  smHeight,
}: {
  width?: number | string | undefined;
  height?: number | string | undefined;
  mdWidth?: number | string | undefined;
  mdHeight?: number | string | undefined;
  smWidth?: number | string | undefined;
  smHeight?: number | string | undefined;
}) {
  return (
    <Space
      sx={(theme) => ({
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
          width: width,
          height: height,
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          width: mdWidth,
          height: mdHeight,
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          width: smWidth,
          height: smHeight,
        },
      })}
    />
  );
}

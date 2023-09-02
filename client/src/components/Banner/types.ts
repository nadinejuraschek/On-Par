import { PropsWithChildren } from "react";

export interface IBanner extends PropsWithChildren {
  className?: string;
  variant?: TBannerVariant;
}

export type TBannerVariant = "error" | "secondary" | "warning";

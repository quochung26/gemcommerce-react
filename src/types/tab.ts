import { Dispatch, SetStateAction } from "react";

export interface TabOption {
  label: string;
  value: string;
}

export interface TabProps {
  options: TabOption[];
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
export interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

export interface LanguageFlagProps {
  language: string;
  size?: number;
}

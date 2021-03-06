export type PageProps = {
  insured: Insured;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validate: (event: React.FocusEvent) => void;
  errors: any;
};

export type Insured = {
  id?: number;
  name: string;
  dob: string;
  isSmoker: boolean;
  weight?: number;
};

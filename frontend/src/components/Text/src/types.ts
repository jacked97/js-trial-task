export type TextVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    | 'paragraph';

export interface TextProps {
    variant?: TextVariant;
    translationKey?: string;
    variables?: Record<string, string | number>;
    children?: string | number | any;
    style?: any;
    numberOfLines?: number;
}

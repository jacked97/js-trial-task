import { TFunction } from 'i18next';

export const resolveText = (
    t: TFunction,
    translationKey?: string,
    variables?: Record<string, string | number>,
    fallback?: string
) => {
    if (translationKey) {
        return t(translationKey, variables);
    }
    return fallback ?? '';
};

import { StyleProp, ViewStyle, ImageStyle, AccessibilityProps } from 'react-native';

export type ResizeMode = 'cover' | 'contain' | 'stretch' | 'center';

export interface ImageProps extends Partial<AccessibilityProps> {
    uri: string;

    /**
     * Custom style for the image (cross-platform)
     */
    style?: StyleProp<ImageStyle>;

    /**
     * Optional container style, e.g. for borders, backgrounds
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Placeholder image (while loading)
     */
    placeholder?: string;

    /**
     * Whether to show a fallback image on error
     */
    fallbackUri?: string;

    /**
     * Resize mode (cover is default)
     */
    resizeMode?: ResizeMode;

    /**
     * Whether to lazy-load (for Web)
     */
    lazyLoad?: boolean;

    /**
     * Alternative text (for Web a11y)
     */
    alt?: string;

    /**
     * Custom image loader for web (optional)
     */
    loader?: React.ReactNode;

    /**
     * Accessibility label (fallback if alt is missing)
     */
    accessibilityLabel?: string;
}

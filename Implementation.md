# 🧭 Implementation Strategy

## 1. Skipping Router
I deliberately skipped adding routing since the task scope is limited to displaying a single page. There's no need to introduce unnecessary complexity for routing when only one view is required.

## 2. React Native Web Setup
I'm using `react-native-web` because the task is focused specifically on a single web page. However, in a larger application, I would separate concerns with two different entry points:
- One tailored for Web
- Another for Mobile (iOS/Android)

This separation helps optimize platform-specific behaviors and simplifies bootstrapping.

## 3. FlashList for Performance
To handle large lists efficiently, I've opted for `FlashList` instead of `FlatList`. This choice is intentional to ensure smooth scrolling and minimal memory overhead, especially when dealing with potentially thousands of user profiles.

## 4. Fast Image Loading
I'm using `react-native-fast-image` to handle image rendering and caching. It allows for lazy loading, which is important for performance in a user-heavy view like this.

## 5. Modular Component Design via Workspaces
All reusable UI components live inside a structured `components/` folder and are configured as independent NPM workspaces. This gives me the flexibility to develop pure, reusable components now — and potentially extract them into a shared design system later.

## 6. Custom Component System
Rather than using an external UI library like Tamagui, I created my own foundational components: `Text`, `Button`, `Image`, `SafeContainer`, and `Header`. These are lean, performant, and built with cross-platform support in mind using standard React Native primitives.

## 7. TouchableOpacity for Better UX Feedback
I'm using `TouchableOpacity` instead of `Pressable` because it offers better built-in visual feedback (like opacity changes on press) without requiring manual state management. It keeps the UX responsive while reducing boilerplate code.

## 8. Backend-Driven Data Combination
I’ve chosen not to implement frontend-level data aggregation. Instead, I would shift that responsibility to the backend. This approach reduces bandwidth usage, avoids redundant API calls, and leverages caching for improved performance and scalability.

---

## ✅ Summary

This implementation is intentionally scoped, performant, and thoughtfully structured. Every choice — from skipping routing to using `FlashList` and modular components — aligns with the needs of the current task while leaving room for future growth and systemization.

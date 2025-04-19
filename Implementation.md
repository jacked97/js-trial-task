1. Skipping adding Router, since the requirements is only to show a single page. 
2. will use react-native-web sinec the scope of the task is specific to 1 page, ideally for a large application i will keep 2 different entry point of the app: 
   1. for Web
   2. for Mobile
3. using flashlist instead of Flatlist for performance optimisation expecting thousands of users profile in actual implementation of the view.
4. react-native-fast-image for lazy loading the image
5. "component" folders are setup with NPM workspaces to allow independent pure functions which can later be part of an external design system. 
6. Using tamagui to have high performance component for common components and on-top of that add custom components. 
7. toucheable opacity have much more UX feedback than Pressbale requires more custom implementation, using touchableopacity for this reason.

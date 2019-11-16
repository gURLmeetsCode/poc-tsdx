import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);

addDecorator(addReadme);
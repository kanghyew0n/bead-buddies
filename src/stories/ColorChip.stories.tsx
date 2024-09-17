import { Meta, StoryFn } from '@storybook/react';
import ColorChip from '../components/ColorChip'; // ColorChip 컴포넌트 경로
import { ColorType } from '../types/colorType';

// Sample color data
const sampleColor: ColorType = {
  id: '1',
  hexCode: '#000000',
  count: 0
};

export default {
  title: 'Color/ColorChip',
  component: ColorChip,
  argTypes: {
    hexCode: {control: 'color'},
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<typeof ColorChip> = (args) => <ColorChip {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorInfo: sampleColor,
  hexCode: sampleColor.hexCode,
  onClick: () => console.log('ColorChip clicked'),
};

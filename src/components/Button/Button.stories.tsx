import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ padding: 20 }}>
        <Story />
      </View>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonStyle: {
      backgroundColor: '#0084F1'
    },
    containerStyle: {},
    radius: '100',
    size: 'sm',
    onPress: action('onPress'),
    title: 'Submit',
    titleStyle: {}
  },
  parameters: {
    controls: { exclude: ['icon', 'iconPosition'] }
  }
};

export const Icon: Story = {
  args: {
    buttonStyle: {
      backgroundColor: '#0084F1'
    },
    containerStyle: {},
    icon: {
      color: 'white',
      iconPosition: 'right',
      name: 'react',
      size: 15,
      type: 'font-awesome-5'
    },
    iconPosition: '',
    radius: '100',
    size: 'sm',
    onPress: action('onPress'),
    title: 'Submit',
    titleStyle: {}
  }
};

import Button from '@/ui/@core/components/atoms/Button'

import { Meta, Story } from '@storybook/react'

export default {
  title: '🎨 디자인시스템 / 컴포넌트 / Atoms ',
  component: Button,
  argTypes: {
    id: { control: 'text', default: null },
    color: {
      options: ['primary', 'secondary', 'warning', 'success', 'danger'],
      control: { type: 'select' }
    },
    type: {
      options: ['submit', 'button', 'reset', null],
      control: { type: 'select' }
    },
    children: {
      description: '버튼 텍스트 입력',
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "<strong>import Input from '@/ui/@core/components/atoms/Button'</strong> <br/> 버튼입니다."
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Button {...args} />
}

export const first = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
first.storyName = '버튼'
first.args = {
  children: '버튼'
}

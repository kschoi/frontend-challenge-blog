import Button from '@/ui/@core/components/atoms/Button'

import { Meta, Story } from '@storybook/react'

export default {
  title: 'π¨ λμμΈμμ€ν / μ»΄ν¬λνΈ / Atoms ',
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
      description: 'λ²νΌ νμ€νΈ μλ ₯',
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "<strong>import Input from '@/ui/@core/components/atoms/Button'</strong> <br/> λ²νΌμλλ€."
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
first.storyName = 'λ²νΌ'
first.args = {
  children: 'λ²νΌ'
}

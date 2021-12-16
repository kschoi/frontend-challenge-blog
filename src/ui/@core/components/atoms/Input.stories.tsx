import Input from './Input'

import { Meta, Story } from '@storybook/react'

export default {
  title: '🎨 디자인시스템 / 컴포넌트 / Atoms / Input',
  component: Input,
  argTypes: {
    value: { control: 'text', default: null, description: '입력창의 초기 텍스트입니다.' },
    valid: { control: 'boolean', default: true, description: '값이 유효한지를 표시합니다.' },
    errorMessage: { control: 'text', description: 'valid가 false 일 때 표시됩니다.' },
    label: { control: 'text', description: '값이 있는 경우, 입력창 위에 라벨이 표시됩니다.' },
    placeholder: {
      control: 'text',
      description: 'value가 없는 경우(빈 입력창인 경우), placeholder 텍스트를 표시합니다.'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "<strong>import Input from '@/ui/@core/components/atoms/Input'</strong> <br/> 입력창입니다."
        // subcomponents: {
        //   IconOnly: 'hello'
        // }
      }
    }
  }
} as Meta

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args: any) => {
  return <Input {...args} />
}

export const first = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
first.storyName = '기본'
first.args = {
  value: '안녕하세요.'
}

export const second = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
second.storyName = '라벨'
second.args = {
  value: 'P@ssw0rd',
  label: '비밀번호'
}

export const third = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
third.storyName = '검증'
third.args = {
  label: '비밀번호',
  value: 'P@ssw0rd',
  valid: false,
  errorMessage: '비밀번호는 8자 이상, 특수문자, 대문자, 숫자 포함입니다.'
}

export const four = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
four.storyName = 'placeholder'
four.args = {
  value: null,
  placeholder: '비밀번호를 입력하세요'
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }

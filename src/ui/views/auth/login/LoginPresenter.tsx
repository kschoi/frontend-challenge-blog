import Input from '@/ui/@core/components/atoms/Input'
import Button from '@/ui/@core/components/atoms/Button'

type Props = {
  isEmailValid: boolean
  isPasswordValid: boolean
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function LoginPresenter({ isEmailValid, isPasswordValid, onSubmit, onChange }: Props) {
  // 내부에서 처리하는 경우(화면구성에서 발생하는 이벤트의 경우), events에 구현한다.
  const events = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      onSubmit(e)
    },
    handleChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(e)
    }
  }

  return (
    <div className="w-full max-w-xs items-center">
      <h1 className="text-primary text-center py-1">SSG 블로그</h1>

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={events.handleSubmit}>
        <div className="mb-4">
          <Input
            name="email"
            label="이메일"
            valid={isEmailValid}
            placeholder="이메일을 입력하세요"
            errorMessage="이메일은 5자 이상, 50자 이하이어야 하며, @가 포함되어야 합니다."
            onChange={events.handleChange}
          />
        </div>
        <div className="mb-6">
          <Input
            name="password"
            label="비밀번호"
            valid={isPasswordValid}
            placeholder="비밀번호를 입력하세요"
            errorMessage="비밀번호는 8자 이상, 특수문자 포함 3개의 조합이어야 합니다."
            onChange={events.handleChange}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button type="submit">로그인</Button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 ssg 웹 개발팀. All rights reserved.
      </p>
    </div>
  )
}

export default LoginPresenter

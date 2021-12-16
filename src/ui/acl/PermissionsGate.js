import { cloneElement } from 'react'
import { PERMISSIONS } from './permission-maps'
import { useStores } from '@/stores'

const hasPermission = ({ permissions, scopes }) => {
  const scopesMap = {}
  scopes.forEach((scope) => {
    scopesMap[scope] = true
  })
  return permissions.some((permission) => scopesMap[permission])
}

/**
 *  페이지 내 기능 제한이 필요할 때 사용합니다.
 */
function PermissionsGate({ children, scopes, RenderError, errorProps }) {
  const { userStore } = useStores()
  const role = userStore.role
  const permissions = PERMISSIONS[role]
  const permissionGranted = hasPermission({ permissions, scopes })

  // 사용자에게 권한이 없다면, 지정 오류 메세지 표시
  if (!permissionGranted) return <RenderError />

  if (permissionGranted && errorProps) return cloneElement(children, { ...errorProps })

  return <>{children}</>
}

PermissionsGate.defaultProps = {
  RenderError: () => <></>,
  errorProps: null,
  scopes: []
}

export default PermissionsGate

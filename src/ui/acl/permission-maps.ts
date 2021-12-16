export const ROLES = {
  USER: 'user',
  EDITOR: 'editor'
}

export const SCOPES = {
  canEdit: 'can-edit',
  canDelete: 'can-delete',
  canView: 'can-view'
}

export const PERMISSIONS = {
  [ROLES.USER]: [SCOPES.canView],
  [ROLES.EDITOR]: [SCOPES.canEdit, SCOPES.canDelete, SCOPES.canView]
}

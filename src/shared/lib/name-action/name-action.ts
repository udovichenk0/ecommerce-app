import uuid4 from 'uuid4'
export const nameAction = <ModelName extends string, ActionName extends string>(
  model: ModelName,
  action: ActionName,
) => {
  return `${action}@${model}[${uuid4()}]` as const
};
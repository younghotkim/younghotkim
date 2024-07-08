export const makeClassname = (
  setting: string,
  _className?: string,
  numberOfLines?: number
) =>
  [
    setting,
    numberOfLines ? `line-clamp-$(numberOfLines}` : "",
    _className,
  ].join(" ");

//공백이 없었을때 컬러 적용이 안됐었음

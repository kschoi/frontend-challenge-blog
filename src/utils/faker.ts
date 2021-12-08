import { CATEGORY_TYPE } from '@/entities'

export const getRandomBoolean = (): boolean => {
  const trueFalse = [true, false]
  return trueFalse[Math.round(Math.random())]
}

export const getRandomDate = (): string => {
  // ex) 2021. 9. 31.
  return new Date(
    +new Date() - Math.floor(Math.random() * 10000000000)
  ).toLocaleDateString('ko-KR')
}

export const getRandomCategoryType = (): CATEGORY_TYPE => {
  var key = Math.floor(Math.random() * Object.keys(CATEGORY_TYPE).length)
  return Object.values(CATEGORY_TYPE)[key]
}

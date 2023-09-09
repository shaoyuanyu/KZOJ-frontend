export function mapNumberToEnum<T>(enumObj: any, number: number): T[keyof T] {
  return enumObj[number] as T[keyof T]
}

export function mapStringToEnum<T>(enumObj: any, string: string): T[keyof T] {
  return enumObj[string] as T[keyof T]
}

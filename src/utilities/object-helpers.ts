type MakeKeysOptional<T> = {[Property in keyof T]?: T[Property]}

export const updateObjectInArray = <T>(item: T[], itemId: T[keyof T], objPropName: keyof T, newObjProps: MakeKeysOptional<T>) => {
    return item.map((u) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
type MakeKeysOptional<T extends {}> = {[Property in keyof T]?: T[Property]}

export const updateObjectInArray = <T extends {}>(item: T[], itemId: T[keyof T], objPropName: keyof T, newObjProps: MakeKeysOptional<T>): T[] => {
    return item.map((u) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
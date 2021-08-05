export const updateObjectInArray = (items: Array<any>, itemId: number, objPropertyName: string, newObjProps: any) => {
    return  items.map(u => {
            if (u[objPropertyName] === itemId) {
                return {...u, ...newObjProps}
            }
            return u
        }
    )
}
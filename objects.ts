function Address(objs: { flat: number, street: string, city: string, province: string }, countryName: string): { objs: { flat: number, street: string, city: string, province: string }, countryName: string } {
    return {
        objs: {
            flat: objs.flat,
            street: objs.street,
            city: objs.city,
            province: objs.province
        },
        countryName: countryName
    }
}

console.log(Address({ flat: 2020, street: 'dufferin', city: 'toronto', province: 'ontario' }, 'Canada'));

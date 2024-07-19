export function getRoleBasedLinks(role: string) {
    switch (role) {
        case 'admin':
            return [
                {
                    title: 'My orders',
                    path: `/profile/orders`,
                },
                {
                    title: 'Cart',
                    path: `/cart`,
                },
                {
                    title: 'Personal data',
                    path: `/profile/personal_data`,
                },
                {
                    title: 'Add product',
                    path: `/profile/create_new_product`,
                },
            ];
        case 'customer':
            return [
                {
                    title: 'My orders',
                    path: `/profile/orders`,
                },
                {
                    title: 'Cart',
                    path: `/cart`,
                },
                {
                    title: 'Personal data',
                    path: `/profile/personal_data`,
                },
            ];
        case 'worker':
            return [
                {
                    title: 'My orders',
                    path: `/profile/orders`,
                },
                {
                    title: 'Cart',
                    path: `/cart`,
                },
                {
                    title: 'Personal data',
                    path: `/profile/personal_data`,
                },
                {
                    title: 'Orders',
                    path: `/profile/new_orders`,
                },
            ];
        default:
            return [];
    }
}

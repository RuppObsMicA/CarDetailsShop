export function getRoleBasedLinks(role: string) {
    switch (role) {
        case 'admin':
            return [
                {
                    title: 'My orders',
                    path: `/profile/my_orders`,
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
                {
                    title: 'Orders',
                    path: `/profile/worker_orders`,
                },
            ];
        case 'customer':
            return [
                {
                    title: 'My orders',
                    path: `/profile/my_orders`,
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
                    path: `/profile/my_orders`,
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
                    path: `/profile/worker_orders`,
                },
            ];
        default:
            return [];
    }
}

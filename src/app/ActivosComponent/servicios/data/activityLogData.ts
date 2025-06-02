export interface ActivityLogInterface {
    id: number;
    empleado_id: number;
    action: string;
    description: string;
    ip: string;
    created_at: Date;
}

export const activityLogData: ActivityLogInterface[] = [
    {
        id: 1,
        empleado_id: 101,
        action: 'login',
        description: 'User logged into the system',
        ip: '192.168.1.1',
        created_at: new Date('2023-05-15T08:30:00')
    },
    {
        id: 2,
        empleado_id: 102,
        action: 'product_create',
        description: 'Created new product "Cotton T-shirt"',
        ip: '192.168.1.45',
        created_at: new Date('2023-05-15T09:15:22')
    },
    {
        id: 3,
        empleado_id: 101,
        action: 'product_update',
        description: 'Updated stock for product ID 5',
        ip: '192.168.1.1',
        created_at: new Date('2023-05-15T10:05:33')
    },
    {
        id: 4,
        empleado_id: 103,
        action: 'logout',
        description: 'User logged out of the system',
        ip: '192.168.1.78',
        created_at: new Date('2023-05-15T11:20:15')
    },
    {
        id: 5,
        empleado_id: 102,
        action: 'order_create',
        description: 'Created new order #10025',
        ip: '192.168.1.45',
        created_at: new Date('2023-05-15T14:30:00')
    },
    {
        id: 6,
        empleado_id: 104,
        action: 'login',
        description: 'User logged into the system',
        ip: '192.168.1.92',
        created_at: new Date('2023-05-16T08:05:00')
    },
    {
        id: 7,
        empleado_id: 101,
        action: 'product_delete',
        description: 'Deleted product ID 12',
        ip: '192.168.1.1',
        created_at: new Date('2023-05-16T09:45:18')
    },
    {
        id: 8,
        empleado_id: 103,
        action: 'settings_update',
        description: 'Updated system settings',
        ip: '192.168.1.78',
        created_at: new Date('2023-05-16T11:10:42')
    },
    {
        id: 9,
        empleado_id: 102,
        action: 'export',
        description: 'Exported product list to CSV',
        ip: '192.168.1.45',
        created_at: new Date('2023-05-16T15:20:30')
    },
    {
        id: 10,
        empleado_id: 104,
        action: 'login_failed',
        description: 'Failed login attempt',
        ip: '192.168.1.92',
        created_at: new Date('2023-05-17T08:15:00')
    },
    {
        id: 11,
        empleado_id: 101,
        action: 'password_change',
        description: 'Changed account password',
        ip: '192.168.1.1',
        created_at: new Date('2023-05-17T10:30:15')
    },
    {
        id: 12,
        empleado_id: 103,
        action: 'report_generate',
        description: 'Generated sales report',
        ip: '192.168.1.78',
        created_at: new Date('2023-05-17T14:45:00')
    }
];
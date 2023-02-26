import { BlitzPage } from "@blitzjs/next";
import { Title } from '@mantine/core';
import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    BadgeDelta,
    DeltaType,
    Divider,
} from '@tremor/react';
import DashboardLayout from "src/core/layouts/Dashboard"

const userDetails: {
    id: number,
    name: string,
    email: string,
    address: string,
    role: string,
    subscriptionExpiry: string,
    subscriptionExpiryType: DeltaType,
}[] = [
        {
            id: 1,
            name: 'Peter Doe',
            email: 'test1@gmail.com',
            address: 'kolkata',
            role: 'ADMIN',
            subscriptionExpiry: '104 Days Left',
            subscriptionExpiryType: 'increase',
        },
        {
            id: 2,
            name: 'Lena Whitehouse',
            email: 'Whitehouse@gmail.com',
            address: 'kolkata',
            role: 'User',
            subscriptionExpiry: '2 Days Left',
            subscriptionExpiryType: 'decrease',
        },
        {
            id: 3,
            name: 'Phil Less',
            email: 'Phil@gmail.com',
            address: 'Assam',
            role: 'User',
            subscriptionExpiry: '61 Days Left',
            subscriptionExpiryType: 'moderateIncrease',
        },
        {
            id: 4,
            name: 'Max Balmoore',
            email: 'test5@gmail.com',
            address: 'Hyderabad',
            role: 'User',
            subscriptionExpiry: '28 Days Left',
            subscriptionExpiryType: 'unchanged',
        },
        {
            id: 5,
            name: 'John Camper',
            email: 'Camper@gmail.com',
            address: 'Banglore',
            role: 'User',
            subscriptionExpiry: '78 Days Left',
            subscriptionExpiryType: 'moderateIncrease',
        },
        {
            id: 6,
            name: 'Peter Moore',
            email: 'Moore@gmail.com',
            address: 'Chennai',
            role: 'User',
            subscriptionExpiry: '1 Day Left',
            subscriptionExpiryType: 'decrease',
        },
        {
            id: 7,
            name: 'Joe Sachs',
            email: 'Joe@gmail.com',
            address: 'Delhi',
            role: 'User',
            subscriptionExpiry: '38 Day Left',
            subscriptionExpiryType: 'unchanged',
        },
    ];

const EmergencyDetails: {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    userName: string,
    userId: number,
}[] = [
        {
            id: 1,
            name: 'Daniel Hall',
            email: 'test1@gmail.com',
            address: 'kolkata',
            phone: '+1 220-652-4541',
            userName: 'Lena Whitehouse',
            userId: 2,
        },
        {
            id: 2,
            name: 'William Jack',
            email: 'timoyn@dandang.email',
            address: 'Mumbai',
            phone: '+91 65183 89073',
            userName: 'Max Balmoore',
            userId: 4,
        },
        {
            id: 3,
            name: 'Christian Hall',
            email: 'test1@gmail.com',
            address: 'Darjeeling',
            phone: '9856321478',
            userName: 'Phil Less',
            userId: 3,
        },
        {
            id: 4,
            name: 'Michael  Alik',
            email: 'test1@gmail.com',
            address: 'kolkata',
            phone: '+91 61279 72789',
            userName: 'Peter Doe',
            userId: 1,
        },
        {
            id: 5,
            name: 'Jamy Ryan',
            email: 'mistake5@punyaprast.nl',
            address: 'Bangalore',
            phone: '+91 61279 06431',
            userName: 'Peter Moore',
            userId: 6,
        },
        {
            id: 6,
            name: 'Joey Gino',
            email: 'ntvalery@henceut.com',
            address: 'Delhi',
            phone: '+91 61299 96451',
            userName: 'Joe Sachs',
            userId: 7,
        },
        {
            id: 7,
            name: 'Henry Doe',
            email: 'rludlam@kubét.vn',
            address: 'Chennai',
            phone: '9856321478',
            userName: 'John Camper',
            userId: 5,
        },
    ];




const UsersPage: BlitzPage = () => {
    return (
        <div>
            <Title order={1}>USERS ARCHIVE</Title>
            <Divider />
            <Title order={3}>Customer Details</Title>
            <UserTable />
            <Title order={3}>Emergency Contact Details</Title>
            <EmergencyContactTable />
        </div>
    );
}

export function UserTable() {
    return (
        <div className="m-5">
            <Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell> User Id </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Name </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Email </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Address </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Role </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Subscription Expiry</TableHeaderCell>
                            {/* <TableHeaderCell textAlignment="text-right"> Status </TableHeaderCell> */}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {userDetails.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell textAlignment="text-left">{item.name}</TableCell>
                                <TableCell textAlignment="text-left">{item.email}</TableCell>
                                <TableCell textAlignment="text-left">{item.address}</TableCell>
                                <TableCell textAlignment="text-left">{item.role}</TableCell>
                                <TableCell textAlignment="text-left">
                                    <BadgeDelta deltaType={item.subscriptionExpiryType} text={item.subscriptionExpiry} size="xs" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
export function EmergencyContactTable() {
    return (
        <div className="m-5">
            <Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell> Id </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Name </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Email </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Phone </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> Address </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> User </TableHeaderCell>
                            <TableHeaderCell textAlignment="text-left"> UserID </TableHeaderCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {EmergencyDetails.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell textAlignment="text-left">{item.name}</TableCell>
                                <TableCell textAlignment="text-left">{item.email}</TableCell>
                                <TableCell textAlignment="text-left">{item.phone}</TableCell>
                                <TableCell textAlignment="text-left">{item.address}</TableCell>
                                <TableCell textAlignment="text-left">{item.userName}</TableCell>
                                <TableCell textAlignment="text-left">{item.userId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}




UsersPage.suppressFirstRenderFlicker = true
UsersPage.authenticate = {
    redirectTo: "/auth/login",
}
UsersPage.getLayout = (page) => <DashboardLayout title="Dashboard">{page}</DashboardLayout>

export default UsersPage

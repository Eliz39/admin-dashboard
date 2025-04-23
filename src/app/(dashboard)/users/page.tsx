'use client';

import { MoreHorizontal, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { usePaginatedUsers } from '@/lib/usePaginatedUsers';
import { UsersPagination } from '@/components/users-pagination';
import { useDeleteUser } from '@/hooks/use-delete-user';
import { useSearchParams } from 'next/navigation';

function UsersPage() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);

  const { totalUsers, users, totalPages, isLoading, error } =
    usePaginatedUsers(1);

  const deleteUser = useDeleteUser(currentPage);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users analytics</h1>
      <div className={'mx-auto my-7 flex max-w-4xl gap-4'}>
        <Card>
          <CardTitle className={'mx-auto'}>
            <p className="text-lg font-semibold">Total Users</p>
          </CardTitle>
          <CardContent className={'mx-auto'}>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Updated xx minutes ago</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={'mx-auto'}>
              <p className="text-lg font-semibold">New Users</p>
            </CardTitle>
          </CardHeader>
          <CardContent className={'mx-auto'}>
            <p className="text-2xl font-bold">56</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Updated xx minutes ago</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={'mx-auto'}>
              <p className="text-lg font-semibold">Total login past 30 days</p>
            </CardTitle>
          </CardHeader>
          <CardContent className={'mx-auto'}>
            <p className="text-2xl font-bold">10 000</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Updated xx minutes ago</p>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="mx-auto w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">Active Users</CardTitle>
            <CardDescription>
              View the last 10 active users in your system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mb-6">
              <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search users by name, email or role..."
                className="pl-10"
              />
            </div>
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="hover:bg-muted/50 flex items-center justify-between rounded-lg border p-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <Link
                        href={`/users/${user.id}`}
                        className="text-primary font-medium hover:underline"
                      >
                        {user.firstName} {user.lastName}
                      </Link>
                      <div className="text-muted-foreground text-sm">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="hidden md:inline-flex">
                      {user.role}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            href={`/users/${user.id}`}
                            className="flex w-full"
                          >
                            View profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          data-variant="destructive"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete profile
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <UsersPagination totalPages={totalPages} />
    </div>
  );
}

export default UsersPage;

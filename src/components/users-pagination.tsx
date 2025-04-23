'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

type Props = {
  totalPages: number;
};

export function UsersPagination({ totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') || 1);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  const getPaginationRange = () => {
    const range: Array<number | 'ellipsis'> = [];

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    range.push(1);

    if (startPage > 2) {
      range.push('ellipsis');
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    if (endPage < totalPages - 1) {
      range.push('ellipsis');
    }

    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const pages = getPaginationRange();

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canGoBack) setPage(currentPage - 1);
            }}
            className={cn({ 'pointer-events-none opacity-50': !canGoBack })}
          />
        </PaginationItem>

        {pages.map((item, index) =>
          item === 'ellipsis' ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(item);
                }}
                className={cn(
                  'rounded-md px-3 py-1',
                  item === currentPage && 'bg-primary text-white'
                )}
              >
                {item}
              </Link>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (canGoForward) setPage(currentPage + 1);
            }}
            className={cn({ 'pointer-events-none opacity-50': !canGoForward })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

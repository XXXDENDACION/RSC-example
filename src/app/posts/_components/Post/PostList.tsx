'use client'
import React, {useDeferredValue, useState} from "react";
import {Search} from "@/app/posts/_components/Search";
import {SearchResult} from "@/app/posts/_components/Search/SearchResult";
import {useDebounce} from "@/app/posts/_lib/hooks";

export function PostList({ children }: { children: React.ReactNode; } ) {
    const [query, setQuery] = useState('');
    const [hasAttemptLoadMore, setHasAttemptLoadMore] = useState(false);
    const debouncedQuery = useDebounce(query, 250);
    const deferredQuery = useDeferredValue(debouncedQuery);

    const isVisibleInitialPage = !deferredQuery && !hasAttemptLoadMore;

    return (
        <div>
            <Search onChange={(val) => setQuery(val)} value={query} />
            {isVisibleInitialPage && children}
            <SearchResult
                query={deferredQuery}
                setAttemptLoadMore={setHasAttemptLoadMore}
                hasAttemptLoadMore={hasAttemptLoadMore}
            />
        </div>
    )
}
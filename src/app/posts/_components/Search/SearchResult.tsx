import React, {memo, useEffect, useRef, useState} from "react";
import {getPostChunkNode} from "@/app/posts/_components/Post";

export const SearchResult = memo(({ query, setAttemptLoadMore, hasAttemptLoadMore } : {
    query: string,
    setAttemptLoadMore: React.Dispatch<React.SetStateAction<boolean>>,
    hasAttemptLoadMore: boolean
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<React.ReactNode[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const currentOffset = useRef<number | null>(0);

    const loadChunks = async (val?: string) => {
        setIsLoading(true);

        const [node, nextOffset] = await getPostChunkNode(currentOffset.current ?? 0, val);
        currentOffset.current = nextOffset;

        if (!nextOffset) {
            setIsFinished(true);
        }

        setIsLoading(false);

        return [node, nextOffset] as const;
    }

    const loadMore = async () => {
        setAttemptLoadMore(true);
        if (isFinished) {
            return;
        }

        const [node, nextOffset] = await loadChunks(query);
        setPosts((prevState) => {
            return ([...prevState, node])
        });
    }

    useEffect(() => {
        const loadQuery = async (val: string) => {
            currentOffset.current = 0;
            const [node] = await loadChunks(val);
            setPosts([node]);
            setIsFinished(false);
        }

        loadQuery(query);
    }, [query])

    const isVisibleSearchResults = !!query || hasAttemptLoadMore;

    return (
        <>
            {isVisibleSearchResults && posts}
            {!isFinished && (
                <div className="flex justify-center">
                    <button
                        disabled={isLoading}
                        onClick={loadMore}
                        className="flex justify-center w-full py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 disabled:opacity-50"
                    >
                        {isLoading ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </>
    )
});

SearchResult.displayName = 'SearchResult';

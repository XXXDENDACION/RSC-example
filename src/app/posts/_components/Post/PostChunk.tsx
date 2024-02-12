"use server"
import { v4 as uuidv4 } from 'uuid';
import {fetchPosts} from "@/app/posts/_lib";
import {PostItem} from "@/app/posts/_components";
import React, {Suspense} from "react";
import {PAGE_SIZE} from "@/app/posts/_lib/constants";
import {PostItemSkeleton} from "@/app/posts/_components/Post/PostItemSkeleton";

const cache = new Map();

export async function PostChunk({ offset, query }: { offset: number; query?: string; }){
    const { posts, total } = await fetchPosts(offset, query);
    cache.set('total', total);
    return (
        <div>
            {posts.map(({ id, title, body}) => (
                <PostItem
                    key={id}
                    id={id}
                    title={title}
                    body={body}
                />
            ))}
        </div>
    )
}

export async function getPostChunkNode(offset = 0, query?: string) {
    'use server'
    const total = cache.get('total');
    const newOffset = offset + PAGE_SIZE < total ? offset + PAGE_SIZE : null;

    return [
        <Suspense key={uuidv4()} fallback={<PostItemSkeleton />}>
            <PostChunk offset={offset} query={query} />
        </Suspense>,
        newOffset
    ] as const;
}
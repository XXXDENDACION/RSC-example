"use server"

import {request} from "@/utils";

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    postId: number;
    body: string;
}

// Synthetic delay
export const sleep = async (ms: number) => new Promise((res) => {
    setTimeout(() => {
        res(true);
    }, ms)
})

// Server actions

export async function fetchPosts(offset = 0, query?: string) {
    "use server"
    const url = query ? '/posts/search' : '/posts';
    const data = await request<Array<Post>, 'posts'>(url, {
        params: {
            limit: 5,
            skip: offset,
            q: query ?? ''
        }
    });
    return data;
}

export async function fetchComments(postId: number) {
    "use server"
    const data = await request<Array<Comment>, 'comments'>('/comments', {
        params: {
            postId: postId
        }
    });

    return data.comments;
}
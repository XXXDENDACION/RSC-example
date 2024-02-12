import {PostList} from "./_components";
import {PostChunk} from "@/app/posts/_components/Post";

export default async function PostsApp() {
    return (
        <>
            <PostList>
                <PostChunk offset={0} />
            </PostList>
        </>
    );
}
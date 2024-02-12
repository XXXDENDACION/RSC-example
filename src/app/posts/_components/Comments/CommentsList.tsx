"use server"
import {fetchComments} from "@/app/posts/_lib";
import {sleep} from "@/app/posts/_lib/posts";

export async function CommentsList({ postId }: { postId: number }) {
    const comments = await fetchComments(postId);

    await sleep(1000);

    return  (
        <article className="max-w-72">
            {!!comments && comments.map(({id, body}) => (
                <section key={id} className="mb-4">
                    {/*<p className="text-gray-300 font-500 mb-2">*/}
                    {/*    <i>*/}
                    {/*        {body}*/}
                    {/*    </i>*/}
                    {/*</p>*/}
                    <p className="text-base">
                        {body}
                    </p>
                    <hr className="my-3"/>
                </section>
            ))}
        </article>
    )
}

export async function loadCommentsListNode(postId: number) {
    return [
        <CommentsList postId={postId} key={postId} />
    ]
}

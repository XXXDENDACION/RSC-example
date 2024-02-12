"use server"
import {Comments} from "../Comments";
export async function PostItem({ id, body, title } : {
    id: number,
    body: string,
    title: string,
}) {
    return (
        <article
            className="m-2 flex max-w-[600px] flex-col rounded-md border-solid border-2 border-border-blue bg-regal-blue p-2 text-white"
        >
            <h1 className="pb-4 text-xl">{title}</h1>
            <p className="pb-6 text-sm">{body}</p>

            <Comments id={id} />
        </article>
    )
}
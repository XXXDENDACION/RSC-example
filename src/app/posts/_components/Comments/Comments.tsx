'use client'

import {Suspense, useCallback, useState, useTransition} from "react";

import {CommentButton} from "./CommentButton";
import {loadCommentsListNode} from "./CommentsList";

export function Comments({ id }: { id: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const [commentsNode, setCommentsNode] = useState<React.ReactNode[]>();

    const loadComments = ((id: number) => {
        setIsOpen((prevState) => !prevState);
        if (!commentsNode) {
            loadCommentsListNode(id).then((node) => {
                setCommentsNode(node)
            })
        }
    })

    return (
        <>
            <CommentButton id={id} onClick={loadComments} />
            <Suspense fallback={<p>Is loading...</p>}>
                {isOpen && (
                    <>
                        <hr className="my-3"/>
                        {commentsNode}
                    </>
                )}
            </Suspense>
        </>
    )
}
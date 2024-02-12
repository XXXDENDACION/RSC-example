
export function CommentButton({ onClick, id }: { onClick: (id: number ) => void; id: number }) {
    return (
        <>
            <label
                htmlFor={`collapse-${id}`}
                className="flex w-full py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                Load Comments
            </label>
            <input
                id={`collapse-${id}`}
                data-post-id={id}
                type="checkbox"
                className="hidden peer/comments"
                onClick={() => onClick(id)}
            />
        </>
    )
}
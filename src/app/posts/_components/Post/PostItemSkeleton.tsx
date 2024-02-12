export const PostItemSkeleton = () => {
    return (
        <article
            className="m-2 animate-pulse flex min-w-[600px] flex-col rounded-md border-solid border-2 border-border-blue bg-regal-blue p-2 text-white"
        >
            <h1 className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-80 mb-6"/>
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-3"/>
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-3"/>
            <p className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-5"/>

            <p className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700"/>
        </article>
    )
}
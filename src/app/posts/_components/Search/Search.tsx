
export function Search({ onChange, value }: { onChange: (val: string) => void; value: string }) {
    return (
        <div className="max-w-[600px] w-[100%] p-2">
            <label
                htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Find post</label>
            <input
                value={value}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search post..." required
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
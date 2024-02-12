
interface RequestOptions extends Omit<RequestInit, "body"> {
    body?: Record<string, any>;
    params?: Record<string, string | number>;
}

type MetaData = {
    total: number;
    skip: number;
    limit: number;
}

type ResponseData<T, TData extends string = 'data'> =  {
    [Key in keyof T as TData]: T
} & MetaData;

const baseUrl = 'https://dummyjson.com';

export async function request<
    TData = unknown,
    TKey extends string = 'data'
>(
    url: string,
    options: RequestOptions = {}
): Promise<ResponseData<TData, TKey>> {
    const { method, params, body, headers , ...rest} = options;

    const normalizedParams = params
        ? new URLSearchParams(params as Record<string, string>).toString()
        : undefined;

    const queryString = normalizedParams ? `?${normalizedParams}` : "";

    console.log(`${baseUrl}${url}${queryString}`);

    return fetch(`${baseUrl}${url}${queryString}`, {
        ...rest,
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined
    }).then(res => res.json());
}
declare interface ImportMeta {
    glob<T = Record<string, never>>(
        pattern: string,
        options?: {
            eager?: boolean;
            importFn?: (path: string) => Promise<T>;
        }
    ): Record<string, () => Promise<T>>;
    env: {
        [key: string]: string;
    };
}

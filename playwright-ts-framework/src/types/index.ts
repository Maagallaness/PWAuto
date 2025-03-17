export type User = {
    id: string;
    name: string;
    email: string;
};

export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

export type TestResult = {
    testName: string;
    passed: boolean;
    duration: number;
};
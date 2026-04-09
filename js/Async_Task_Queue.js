/**
 * 55. Async_Task_Queue.js
 * 役割: 非同期タスクの実行制限とキュー管理
 */
export const AsyncTaskQueue = {
    async enqueue(tasks) {
        const results = [];
        for (const task of tasks) {
            results.push(await task());
        }
        return results;
    }
};

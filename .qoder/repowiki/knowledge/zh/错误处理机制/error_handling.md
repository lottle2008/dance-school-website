该项目采用轻量级、基于组件和 API 路由的错误处理模式，主要依赖 `try/catch` 块和状态管理来捕获及展示错误。

### 1. 核心策略
- **API 层 (Server)**: 在 `app/api/booking/route.ts` 中，使用 `try/catch` 包裹业务逻辑。对于预期内的校验错误（如字段缺失、格式不符），直接返回带有 `400` 状态码和明确 `message` 的 JSON 响应；对于未预期的服务器异常，捕获后记录日志并返回 `500` 状态码及通用提示。
- **前端层 (Client)**: 在 `components/BookingForm.tsx` 和 `app/admin/bookings/page.tsx` 中，通过 `useState` 维护 `error` 状态。提交或获取数据时，若 `fetch` 失败或返回非成功状态，则更新 `error` 状态并在 UI 上以红色警告框形式展示给用户。

### 2. 关键文件与逻辑
- **`app/api/booking/route.ts`**: 
  - 实现了输入校验（必填项、手机号正则）。
  - 统一了错误响应结构：`{ success: false, message: string }`。
  - 全局捕获异常并记录到 `console.error`。
- **`components/BookingForm.tsx`**: 
  - 在提交前进行客户端预校验。
  - 处理网络请求异常，并在失败时提供降级方案（提示用户直接拨打电话）。
- **`app/admin/bookings/page.tsx`**: 
  - 处理数据加载失败的情况，提供“刷新”按钮以便用户重试。

### 3. 开发规范与建议
- **统一响应结构**: 所有 API 错误应遵循 `{ success: boolean, message: string }` 的格式，便于前端统一解析。
- **用户友好提示**: 避免直接向用户展示技术性错误堆栈，应转化为通俗易懂的提示语（如“服务器繁忙，请稍后重试”）。
- **日志记录**: 服务端捕获异常时必须记录详细日志（当前使用 `console.error`），以便后续排查问题。
- **降级处理**: 在关键业务（如预约）失败时，应提供替代联系方式（如电话），确保业务不中断。
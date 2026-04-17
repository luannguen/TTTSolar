/**
 * # AI CODING RULES
 * 
 * > **BẮT BUỘC**: AI phải đọc file này trước khi generate code.
 * > Mọi code vi phạm RULE phải được sửa lại trước khi hoàn tất.
 * 
 * ---
 * 
 * ## 🎯 0.0. AI Agent Core Workflow (Team Process)

> **BẮT BUỘC**: Agent phải tuân thủ quy trình làm việc nhóm Senior được định nghĩa trong `rule/TEAM-PROCESS.md`.
> File này chứa:
> - **4 Roles**: Tech Lead, Dev, QA, Reviewer
> - **6 Phases**: Analyze, Plan, Implement, Test, Review, Release
> - **DoD (Definition of Done)**: Checklist bắt buộc để hoàn thành task
> - **Debug & Test Protocols**

### Quy trình tóm tắt:

**BEFORE CODING (Tech Lead):**
```
┌─────────────────────────────────────────────────────────────┐
│ 1. Analyze & Plan (theo TEAM-PROCESS.md)                    │
│    → Output: Problem Statement, Solution Options            │
│    → Output: Implementation Plan                            │
├─────────────────────────────────────────────────────────────┤
│ 2. Scan codebase: Đã có module/pattern tương tự chưa?       │
│    → Check useCaseRegistry, features/*/index.js             │
│    → REUSE thay vì recreate                                 │
├─────────────────────────────────────────────────────────────┤
│ 3. Check FeatureSpec: Task này thuộc spec nào?              │
│    → Update/Create spec                                     │
└─────────────────────────────────────────────────────────────┘
```

**WHILE CODING (Dev):**
```
┌─────────────────────────────────────────────────────────────┐
│ 4. Implement theo Plan & Architecture Rules                 │
│    → Tag mọi business rule với FR-xx                        │
│    → Link trực tiếp với functional_requirements trong spec  │
└─────────────────────────────────────────────────────────────┘
```

**AFTER CODING (QA & Reviewer):**
```
┌─────────────────────────────────────────────────────────────┐
│ 5. Testing & Review (theo TEAM-PROCESS.md)                  │
│    → QA: Viết Test Plan / Manual Script                     │
│    → Reviewer: Chạy Self-PR Review Checklist                │
│    → Check Definition of Done (DoD)                         │
├─────────────────────────────────────────────────────────────┤
│ 6. Update Documentation:                                    │
│    → FeatureSpec (status, progress, changelog)              │
│    → useCaseRegistry                                        │
└─────────────────────────────────────────────────────────────┘
```
 * 
 * ---
 * 
 * ## 🎭 0. Quy Tắc UI/UX Interaction (Modal, Toast, Notification)
 * 
 * ### 0.0. UI/UX Design Reference (BẮT BUỘC ĐỌC KHI LÀM GIAO DIỆN)
 * 
 * **Khi làm giao diện hoặc refactor giao diện, PHẢI đọc:**
 * - `rule/UI-UX-DESIGN-RULESET.md` - Quy tắc thiết kế UI/UX toàn diện
 * 
 * **Scope của UI-UX-DESIGN-RULESET.md:**
 * - Mobile-first principles
 * - Product card anatomy (5 thành phần bắt buộc)
 * - Grid & layout rules
 * - Typography, color, icon systems
 * - CTA & conversion optimization
 * - Loading, empty, error states
 * - Navigation patterns
 * - Accessibility requirements
 * - Forbidden patterns (carousel product list, auto-play video, hidden nav)
 * 
 * **Integration:**
 * - AI-CODING-RULES (file này): code structure, technical implementation
 * - UI-UX-DESIGN-RULESET.md: design, layout, user experience, conversion focus
 * 
 * **CRITICAL**: Mọi UI component phải tuân thủ CẢ 2 rulesets.
 * 
 * ---
 * 
 * ### 0.1. KHÔNG Dùng Native Popups
 * ```javascript
 * // ❌ TUYỆT ĐỐI KHÔNG dùng
 * window.confirm("Bạn có chắc?");
 * window.alert("Thành công!");
 * window.prompt("Nhập tên:");
 * 
 * // ✅ ĐÚNG - Dùng hệ thống có sẵn
 * import { useConfirmDialog } from '@/components/hooks/useConfirmDialog';
 * import { useToast } from '@/components/NotificationToast';
 * 
 * const { showConfirm } = useConfirmDialog();
 * const { addToast } = useToast();
 * 
 * // Confirm action
 * const confirmed = await showConfirm({
 *   title: 'Xác nhận xóa',
 *   message: 'Bạn có chắc chắn muốn xóa?',
 *   type: 'danger', // danger, success, warning, info
 *   confirmText: 'Xóa',
 *   cancelText: 'Hủy'
 * });
 * 
 * if (confirmed) {
 *   // Do action
 *   addToast('Đã xóa thành công', 'success');
 * }
 * ```
 * 
 * ### 0.2. Khi Nào Dùng Gì?
 * 
 * | Use Case | Component/Hook | Example |
 * |----------|---------------|---------|
 * | Xác nhận hành động (confirm) | `useConfirmDialog()` | Xóa, duyệt, hủy đơn |
 * | Thông báo ngắn (toast) | `useToast()` / `addToast()` | "Lưu thành công", "Có lỗi" |
 * | Hiển thị chi tiết | `Dialog` from shadcn/ui | Chi tiết đơn hàng, form edit |
 * | Thông báo quan trọng | `AdminNotificationBell` | Đơn mới, cần duyệt |
 * | Form nhập liệu phức tạp | `Dialog` with form | Tạo sản phẩm, edit user |
 * 
 * ### 0.3. Toast Message Guidelines
 * ```javascript
 * // ✅ ĐÚNG - Message rõ ràng, hữu ích
 * addToast('Đã duyệt thành viên Nguyễn Văn A', 'success');
 * addToast('Không thể xóa vì sản phẩm đang có đơn hàng', 'error');
 * addToast('Email đã tồn tại, vui lòng dùng email khác', 'warning');
 * 
 * // ❌ SAI - Message chung chung, không hữu ích
 * addToast('Thành công', 'success');
 * addToast('Lỗi', 'error');
 * addToast('Có gì đó không đúng', 'warning');
 * ```
 * 
 * ### 0.4. AnimatedIcon - Icon System Chuẩn
 * 
 * **QUAN TRỌNG**: Hệ thống icon CHÍNH THỨC của dự án này.
 * 
 * #### Workflow Bắt Buộc:
 * ```
 * 1. ĐỌC AnimatedIcon.jsx TRƯỚC (check Icon.* exports, dòng 278-443)
 * 2. Icon CẦN DÙNG đã có trong Icon.* chưa?
 * 3. CHƯA CÓ → Thêm vào AnimatedIcon.jsx + SAVE → Sau đó mới dùng
 * 4. Dùng: <Icon.TênIcon />
 * ```
 * 
 * #### Cách Dùng:
 * ```javascript
 * // ✅ ĐÚNG - Dùng AnimatedIcon có animation
 * import { Icon } from '@/components/ui/AnimatedIcon.jsx';
 * 
 * <Icon.Spinner />        // Loading spinner quay
 * <Icon.CheckCircle />    // Success với scale-in
 * <Icon.AlertCircle />    // Alert với pulse (DÙNG thay XCircle nếu cần)
 * <Icon.Ban />            // Ban/Cancel với shake
 * <Icon.Package />        // Package icon
 * <Icon.Bell />           // Bell với wiggle
 * 
 * // ❌ SAI - Import trực tiếp từ lucide-react
 * import { CheckCircle } from 'lucide-react'; // Gây lỗi
 * 
 * // ❌ SAI - Dùng icon chưa export trong Icon.*
 * <Icon.XCircle /> // Có thể chưa được export
 * ```
 * 
 * #### Icons Có Sẵn:
 * - Status: Spinner, Loading, CheckCircle, Check, AlertCircle, AlertTriangle, Info, Ban
 * - Actions: Bell, Send, Plus, Minus, Trash, Edit, Save, X, Copy, Download, Upload
 * - Business: DollarSign, Wallet, TrendingUp, Award, Trophy, Star, Crown, BarChart
 * - Users: User, Users, UserPlus, Heart, ThumbsUp, MessageCircle, Mail, Phone
 * - UI: Search, Filter, Menu, Grid, List, Settings, Bookmark
 * - Xem đầy đủ tại AnimatedIcon.jsx dòng 278-443
 * 
 * ### 0.5. Modal System - Kế Thừa EnhancedModal (BẮT BUỘC)
 * 
 * **Mọi modal trong hệ thống PHẢI kế thừa từ `EnhancedModal` hoặc sử dụng `BaseModal` wrapper:**
 * 
 * ```javascript
 * // ✅ CÁCH 1 - Kế thừa trực tiếp EnhancedModal (cho modal đơn giản)
 * import EnhancedModal from '@/components/EnhancedModal';
 * 
 * export default function MyDetailModal({ isOpen, onClose, data }) {
 *   return (
 *     <EnhancedModal
 *       isOpen={isOpen}
 *       onClose={onClose}
 *       title="Chi tiết"
 *       maxWidth="2xl"          // sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, full
 *       showControls={true}     // Hiện nút maximize, minimize, reset
 *       enableDrag={true}       // Cho phép kéo thả
 *       enableResize={true}     // Cho phép resize
 *       persistPosition={false} // Lưu vị trí khi đóng/mở lại
 *       positionKey="my-modal"  // Key lưu vị trí localStorage
 *     >
 *       <div className="p-6">
 *         {/* Modal content */}
 *       </div>
 *     </EnhancedModal>
 *   );
 * }
 * 
 * // ✅ CÁCH 2 - Dùng BaseModal (wrapper với presets, recommended)
 * import { BaseModal } from '@/components/shared/modal';
 * 
 * export default function MyFormModal({ isOpen, onClose }) {
 *   return (
 *     <BaseModal
 *       isOpen={isOpen}
 *       onClose={onClose}
 *       title="Form Modal"
 *       size="md"              // compact, sm, md, lg, xl, full
 *       preset="form"          // form, detail, alert, dashboard
 *       positionKey="my-form"
 *     >
 *       {/* Modal content */}
 *     </BaseModal>
 *   );
 * }
 * ```
 * 
 * ### 0.6. Xử Lý Lỗi Trong Mutations
 * ```javascript
 * // ✅ ĐÚNG - Có try-catch, toast thông báo rõ ràng
 * const handleDelete = async (item) => {
 *   const confirmed = await showConfirm({
 *     title: 'Xóa sản phẩm',
 *     message: `Xóa "${item.name}"? Hành động này không thể hoàn tác.`,
 *     type: 'danger',
 *     confirmText: 'Xóa',
 *   });
 *   
 *   if (confirmed) {
 *     try {
 *       await deleteMutation.mutateAsync(item.id);
 *       addToast(`Đã xóa ${item.name}`, 'success');
 *     } catch (error) {
 *       addToast('Không thể xóa. Vui lòng thử lại.', 'error');
 *     }
 *   }
 * };
 * ```
 * 
 * ---
 * 
 * ## 📐 1. Kiến trúc Tổng Quan (3 Lớp)
 * 
 * ```
 * ┌─────────────────────────────────────────────────────────────┐
 * │                         UI LAYER                            │
 * │   (Components - Chỉ render, nhận props, emit events)        │
 * └─────────────────────────────────────────────────────────────┘
 *                               ▼
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    FEATURE LOGIC LAYER                      │
 * │   (Hooks - State, business logic, orchestration)            │
 * └─────────────────────────────────────────────────────────────┘
 *                               ▼
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    DATA/SERVICE LAYER                       │
 * │   (Services - API calls, DTO mapping, Result<T>)            │
 * └─────────────────────────────────────────────────────────────┘
 * ```
 * 
 * ### Nguyên tắc:
 * - **UI** → Chỉ render, KHÔNG gọi API trực tiếp
 * - **Feature Logic** → State, validate, xử lý nghiệp vụ, gọi service
 * - **Data/Service** → Gọi API, map dữ liệu, trả về `Result<T>`
 * 
 * ### ❌ KHÔNG ĐƯỢC:
 * ```javascript
 * // Trong component UI
 * const ProductList = () => {
 *   const [products, setProducts] = useState([]);
 *   useEffect(() => {
 *     base44.entities.Product.list().then(setProducts); // ❌ SAI
 *   }, []);
 * }
 * ```
 * 
 * ### ✅ ĐÚNG:
 * ```javascript
 * // UI Component
 * const ProductList = () => {
 *   const { products, isLoading } = useProductList(); // ✅ Dùng hook
 *   return <ProductGrid products={products} />;
 * }
 * 
 * // Hook
 * const useProductList = () => {
 *   return useQuery({
 *     queryKey: ['products'],
 *     queryFn: () => productAPI.list(), // ✅ Gọi service
 *   });
 * }
 * 
 * // Service
 * const productAPI = {
 *   list: async () => base44.entities.Product.list(), // ✅ API call
 * }
 * ```
 * 
 * ---
 * 
 * ## 🎨 2. Quy Tắc UI Layer
 * 
 * ### 2.1. UI là Presentation Only
 * - ❌ KHÔNG dùng `fetch`, `axios`, `base44.entities.*` trong component
 * - ❌ KHÔNG chứa business logic phức tạp
 * - ❌ KHÔNG tự xử lý validation phức tạp
 * - ✅ Chỉ render props, emit events qua callbacks
 * 
 * ### 2.2. Sử dụng Component Chuẩn
 * ```javascript
 * // ✅ ĐÚNG - Dùng component từ UI System
 * import { Button } from "@/components/ui/button";
 * import { BaseModal } from "@/components/shared/modal";
 * import { LoadingState, EmptyState } from "@/components/shared/ui";
 * 
 * // ❌ SAI - Tự viết lại
 * const MyButton = ({ children }) => <button className="...">{children}</button>;
 * ```
 * 
 * ### 2.3. Giới Hạn Kích Thước
 * - Component > 300 dòng → **PHẢI TÁCH NHỎ**
 * - Component làm > 1 nhiệm vụ → **PHẢI TÁCH NHỎ**
 * 
 * ### 2.4. Đặt Tên Rõ Ràng
 * ```javascript
 * // ✅ ĐÚNG
 * ProductListTable, OrderFormDialog, UserFilterBar, ReviewCard
 * 
 * // ❌ SAI
 * List, Form, Card, Item, Component1
 * ```
 * 
 * ---
 * 
 * ## 🧠 3. Quy Tắc Feature Logic (Hooks)
 * 
 * ### 3.1. Vị Trí Code
 * - Mọi state, business logic, orchestration → **hooks/features**
 * - Mỗi hook chỉ có **1 mục tiêu chính (Single Goal)**
 * 
 * ```javascript
 * // ✅ ĐÚNG - Single goal
 * useProductList()    // Chỉ lo list
 * useProductForm()    // Chỉ lo form create/edit
 * useProductDetail()  // Chỉ lo detail view
 * 
 * // ❌ SAI - Làm quá nhiều việc
 * useProductEverything() // List + Detail + Form + Filter + Export
 * ```
 * 
 * ### 3.2. Tách Hook Khi Cần
 * Nếu hook đang xử lý quá nhiều:
 * ```javascript
 * // ❌ SAI - Hook quá lớn
 * useProducts() {
 *   // 200 dòng: list + filter + pagination + CRUD + detail + export
 * }
 * 
 * // ✅ ĐÚNG - Tách nhỏ
 * useProductList()   // List + filter + pagination
 * useProductCRUD()   // Create/Update/Delete
 * useProductExport() // Export logic
 * ```
 * 
 * ### 3.3. Reuse Base Hooks
 * Trước khi tạo hook mới, kiểm tra:
 * 1. `useCaseRegistry` có use case tương tự?
 * 2. Có base hook có thể extend?
 * 
 * ```javascript
 * // ✅ ĐÚNG - Reuse base hook
 * import { useItemListBase } from "@/components/shared/hooks";
 * 
 * export function useProductList() {
 *   return useItemListBase({
 *     entityName: 'Product',
 *     queryKey: 'products',
 *     // Chỉ config khác biệt
 *   });
 * }
 * ```
 * 
 * ### 3.4. Không Duplicate Logic Client/Admin
 * ```javascript
 * // ✅ ĐÚNG - Base hook dùng chung
 * // shared/hooks/useItemListBase.js
 * export function useItemListBase(options) { /* logic chung */ }
 * 
 * // admin/hooks/useProducts.js
 * export function useProducts() {
 *   const base = useItemListBase({ activeOnly: false });
 *   // Thêm CRUD cho admin
 * }
 * 
 * // client/hooks/useProducts.js  
 * export function useProducts() {
 *   const base = useItemListBase({ activeOnly: true });
 *   // Thêm ratings cho client
 * }
 * ```
 * 
 * ---
 * 
 * ## 📡 4. Quy Tắc Data/Service Layer
 * 
 * ### 4.1. Vị Trí API Calls
 * - **TẤT CẢ** API calls phải nằm trong service layer
 * - Không hardcode URL trong UI/hook
 * 
 * ```javascript
 * // ✅ ĐÚNG - Service layer
 * // services/productService.js
 * export const productAPI = {
 *   list: () => base44.entities.Product.list(),
 *   create: (data) => base44.entities.Product.create(data),
 * };
 * 
 * // ❌ SAI - Trong component/hook
 * base44.entities.Product.list(); // Không được gọi trực tiếp
 * ```
 * 
 * ### 4.2. Trả Về Result<T>
 * ```javascript
 * // ✅ ĐÚNG - Dùng Result wrapper
 * import { success, failure, ErrorCodes } from "@/components/data/types";
 * 
 * export const productAPI = {
 *   create: async (data) => {
 *     try {
 *       if (!data.name) {
 *         return failure('Tên không được trống', ErrorCodes.VALIDATION_ERROR);
 *       }
 *       const product = await base44.entities.Product.create(data);
 *       return success(product);
 *     } catch (err) {
 *       return failure(err.message, ErrorCodes.SERVER_ERROR);
 *     }
 *   }
 * };
 * 
 * // ❌ SAI - Trả dữ liệu raw
 * create: async (data) => {
 *   return await base44.entities.Product.create(data);
 * }
 * ```
 * 
 * ### 4.3. Mapping DTO Tại Service
 * ```javascript
 * // ✅ ĐÚNG - Map tại service
 * const productAPI = {
 *   list: async () => {
 *     const raw = await base44.entities.Product.list();
 *     return raw.map(mapToProductDTO); // Map ở đây
 *   }
 * };
 * 
 * // ❌ SAI - Map rải rác trong component
 * products.map(p => ({ ...p, displayPrice: formatPrice(p.price) }));
 * ```
 * 
 * ### 4.4. Khi Thêm Service Mới
 * 1. Tạo DTO input/output trong `types.js`
 * 2. Xử lý lỗi bằng `ErrorCodes`
 * 3. Export qua `components/data/index.js`
 * 
 * ---
 * 
 * ## ⚠️ 5. Quy Tắc Error & Result
 * 
 * ### 5.1. Luôn Dùng Result<T>
 * ```javascript
 * import { success, failure, ErrorCodes } from "@/components/data/types";
 * 
 * // ✅ ĐÚNG
 * return success(data);
 * return failure('Lỗi validation', ErrorCodes.VALIDATION_ERROR);
 * 
 * // ❌ SAI
 * throw new Error("Lỗi gì đó");
 * return { error: "random message" };
 * ```
 * 
 * ### 5.2. Error Codes Chuẩn
 * ```javascript
 * // Dùng ErrorCodes đã định nghĩa
 * ErrorCodes.VALIDATION_ERROR  // Lỗi validate input
 * ErrorCodes.NOT_FOUND         // Không tìm thấy
 * ErrorCodes.UNAUTHORIZED      // Chưa đăng nhập
 * ErrorCodes.FORBIDDEN         // Không có quyền
 * ErrorCodes.NETWORK_ERROR     // Lỗi mạng
 * ErrorCodes.SERVER_ERROR      // Lỗi server
 * ```
 * 
 * ### 5.3. UI Không Tự Bịa Message
 * ```javascript
 * // ✅ ĐÚNG - Dùng error mapping
 * import { mapError } from "@/components/shared/errors";
 * 
 * const { userMessage, displayType } = mapError(result.code, { domain: 'product' });
 * toast.error(userMessage);
 * 
 * // ❌ SAI - Hardcode message
 * toast.error("Có lỗi xảy ra khi tạo sản phẩm");
 * alert("Lỗi không xác định");
 * ```
 * 
 * ---
 * 
 * ## 🆕 6. Quy Tắc Thêm Feature Mới
 * 
 * Khi tạo tính năng mới (vd: `review`, `category`), làm theo thứ tự:
 * 
 * ### Bước 1: DTO & Types
 * ```javascript
 * // components/data/types.js
 * /**
 *  * @typedef {Object} ReviewCreateDTO
 *  * @property {string} item_id
 *  * @property {number} rating
 *  * @property {string} comment
 *  */
 * ```
 * 
 * ### Bước 2: Service
 * ```javascript
 * // services/reviewService.js
 * export const reviewAPI = {
 *   create: async (data) => {
 *     // Validate
 *     if (!data.rating) return failure('...', ErrorCodes.VALIDATION_ERROR);
 *     // Call API
 *     const review = await base44.entities.Review.create(data);
 *     return success(review);
 *   }
 * };
 * ```
 * 
 * ### Bước 3: Hook
 * ```javascript
 * // hooks/useReviewForm.js
 * export function useReviewForm() {
 *   const mutation = useMutation({
 *     mutationFn: reviewAPI.create,
 *   });
 *   // Return state + handlers
 * }
 * ```
 * 
 * ### Bước 4: UI
 * ```javascript
 * // components/ReviewForm.jsx
 * export function ReviewForm() {
 *   const { submit, isLoading, error } = useReviewForm();
 *   return <form onSubmit={submit}>...</form>;
 * }
 * ```
 * 
 * ### Bước 5: Update UseCaseRegistry (BẮT BUỘC)
 * ```javascript
 * // components/data/useCaseRegistry.js
 * {
 *   id: 'review.create',
 *   domain: 'review',
 *   description: 'Tạo đánh giá mới',
 *   input: 'ReviewCreateDTO',
 *   output: 'Result<Review>',
 *   service: 'reviewAPI.create',
 *   hook: 'useReviewForm',
 * }
 * ```
 * 
 * ---
 * 
 * ## ⚡ 7. Quy Tắc Performance (React)
 * 
 * ### 7.1. Render Optimization
 * - Component cha re-render → Con render theo
 * - Component con nặng/list dài → Dùng `React.memo`
 * - Callback truyền xuống con → Dùng `useCallback`
 * - Value tính toán nặng → Dùng `useMemo`
 * 
 * ```javascript
 * // ✅ ĐÚNG
 * const MemoizedItem = React.memo(Item);
 * const handleClick = useCallback(() => {...}, []);
 * const total = useMemo(() => items.reduce(...), [items]);
 * ```
 * 
 * ### 7.2. Data Fetching
 * - Dùng `useQuery` để cache data
 * - Không fetch trong `useEffect` nếu không cần thiết
 * - Dùng `keepPreviousData: true` khi phân trang
 * 
 * ### 7.3. Bundle Size
 * - Lazy load route/component lớn
 * - ```const AdminModule = lazy(() => import('./AdminModule'));```
 * 
 * ---
 * 
 * ## 📂 8. Quy Tắc File & Folder
 * 
 * ### 8.1. Cấu Trúc File
 * ```
 * feature-name/
 * ├── ui/                  # UI components
 * │   ├── FeatureMain.jsx
 * │   └── components/
 * ├── hooks/               # Logic
 * │   └── useFeature.js
 * ├── data/                # API/Types (optional)
 * └── index.js             # Public API
 * ```
 * 
 * ### 8.2. File Size Limit
 * - File < 300 dòng
 * - Nếu > 300 dòng:
 *   1. Tách sub-components
 *   2. Tách hook logic
 *   3. Tách constants/utils
 * 
 * ---
 * 
 * ## 💅 9. Quy Tắc Coding Style (Clean Code)
 * 
 * ### 9.1. Biến & Hàm
 * - `boolean`: `isLoading`, `hasError`, `canEdit`
 * - `handler`: `handleSave`, `onDelete`
 * - `service`: `fetchProduct`, `createOrder`
 * 
 * ### 9.2. Magic Numbers/Strings
 * ```javascript
 * // ❌ SAI
 * if (status === 1) ...
 * 
 * // ✅ ĐÚNG
 * const STATUS = { ACTIVE: 1 };
 * if (status === STATUS.ACTIVE) ...
 * ```
 * 
 * ### 9.3. Comments
 * - Comment **WHY**, không comment **WHAT**
 * - Nếu code phức tạp → Viết lại cho đơn giản
 * 
 * ---
 * 
 * ## 🧪 10. Quy Tắc Testing (Khi Có Yêu Cầu)
 * 
 * ### 10.1. Unit Test
 * - Test logic trong hooks/utils/services
 * - Mock API calls
 * 
 * ### 10.2. Component Test
 * - Test user interaction (click, input)
 * - Test states (loading, error, success)
 * 
 * ---
 * 
 * ## 🔄 11. Refactoring Rules (Cho Code Cũ)
 * 
 * ### 11.1. Không Đập Đi Xây Lại (Trừ khi được yêu cầu)
 * - Refactor từng phần nhỏ (incremental)
 * - Giữ logic cũ chạy đúng trong khi chuyển đổi
 * 
 * ### 11.2. Chiến Lược Adapter
 * Nếu code cũ quá rối, viết wrapper/adapter mới:
 * ```javascript
 * // Legacy
 * function oldApiCall() { ... }
 * 
 * // New Adapter
 * export const newService = {
 *   getData: async () => {
 *     const data = await oldApiCall();
 *     return normalize(data);
 *   }
 * }
 * ```
 * 
 * ---
 * 
 * ## 🚫 12. Cấm Tuyệt Đối (Zero Tolerance)
 * 
 * 1. ❌ **Không commit code lỗi syntax** (Check lint trước)
 * 2. ❌ **Không dùng `any`** (nếu dùng TS), **không bỏ qua type validation**
 * 3. ❌ **Không hardcode credentials/secrets**
 * 4. ❌ **Không sửa trực tiếp file trong `node_modules`**
 * 5. ❌ **Không để lại `console.log` debug trong code production**
 * 
 * ---
 * 
 * ## ✅ 13. Checklist Kiểm Tra Trước Khi Hoàn Tất Task
 * 
 * ```
 * □ Đã check useCaseRegistry để reuse?
 * □ Code UI có tách biệt logic không?
 * □ Service có trả về Result<T> không?
 * □ Đã handle error cases (try/catch)?
 * □ Đã xóa console.log/unused imports?
 * □ File size < 300 dòng?
 * □ Component/Variable naming rõ nghĩa?
 * ```
 * 
 * > **Ghi nhớ**: 
 * > "Viết code để người khác đọc, không phải chỉ để máy chạy."
 * > "Chậm mà chắc > Nhanh mà ẩu."



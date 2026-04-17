# 📐 UI/UX DESIGN RULESET

**Version**: 1.0.0  
**Last Updated**: 2026-01-08  
**Scope**: Mobile App – Product Listing / Commerce App  
**Style**: Strict, Conversion-focused, Agent-enforced

> **REFERENCE**: See `rule/DESIGN-SYSTEM-STANDARD.md` for specific Tokens (Colors, Spacing) and Component Specs.

---

## 0. CORE PRINCIPLES (BẤT BIẾN)

### RULE 0.1 – Mobile-first

- Mọi thiết kế ưu tiên mobile
- Không thiết kế desktop rồi thu nhỏ
- Responsive từ mobile → desktop, không ngược lại

---

### RULE 0.2 – One-hand usage

- 80% thao tác dùng được bằng 1 tay
- CTA chính nằm trong vùng ngón cái (thumb zone)
- Các điều khiển quan trọng ở dưới 50% màn hình

---

### RULE 0.3 – Design for decision, not decoration

- UI tồn tại để giúp user ra quyết định mua
- Mọi thành phần không phục vụ quyết định → loại bỏ
- Không thêm element "cho đẹp"

---

## 1. USER INTENT RULES

### RULE 1.1 – Intent chính

UI phải phục vụ 3 intent:

1. **Xem nhanh sản phẩm** (scan trong 0.8–1.2s)
2. **So sánh nhanh trong đầu** (giá, rating, trust signal)
3. **Thêm vào giỏ với ít suy nghĩ nhất** (1-tap action)

---

### RULE 1.2 – Không làm loãng intent

- Không nhồi thông tin không cần thiết vào card
- Không trang trí làm chậm nhận thức
- Ưu tiên thông tin giúp quyết định: giá, rating, sold count

---

## 2. SCREEN STRUCTURE RULES

### RULE 2.1 – Một màn hình, một mục tiêu

- Product list: duyệt + thêm giỏ
- Product detail: xem chi tiết + mua
- Không trộn nhiều mục tiêu trên cùng screen

---

### RULE 2.2 – Thứ tự vùng màn hình (bắt buộc)

1. **Header** (search / filter / title)
2. **Content chính** (products, details, forms)
3. **Bottom navigation** (home, categories, cart, profile)

Không đảo thứ tự, không skip vùng

---

### RULE 2.3 – Header sticky

- Header phải sticky khi scroll
- User luôn có thể search/filter mà không scroll lên

---

## 3. GRID & LAYOUT RULES

### RULE 3.1 – Grid cố định

- **Product list dùng grid 2 cột** (mobile)
- Desktop có thể 3–4 cột
- Không tự ý đổi layout sang list view mặc định

---

### RULE 3.2 – Spacing system

Chỉ dùng các giá trị:

- **4px** (tight spacing)
- **8px** (compact spacing)
- **12px** (default spacing)
- **16px** (comfortable spacing)
- **24px** (section spacing)

❌ **Không dùng số lẻ hoặc tự chọn** (vd: 10px, 15px, 20px)

---

### RULE 3.3 – Card density

- Card phải đọc được trong **0.8–1.2 giây**
- Không quá dày (nhiều info gây rối), không quá thưa (lãng phí không gian)
- Tỷ lệ image : text : action ≈ 60% : 30% : 10%

---

### RULE 3.4 – Safe area

- Không đặt CTA sát mép màn hình
- Padding tối thiểu 16px từ edge

---

## 4. TYPOGRAPHY RULES

### RULE 4.1 – Font size cố định

- **Product name**: 14–16px
- **Price**: 16–18px (bold)
- **Meta info** (unit, sold, rating): 12–13px
- **Button text**: 14–16px
- **Section heading**: 18–20px

---

### RULE 4.2 – Text limits

- Product name tối đa **2 dòng**, sau đó ellipsis (...)
- Không dùng ALL CAPS cho text chính
- Description tối đa 3 dòng trên card

---

### RULE 4.3 – Line height

- Line height ≥ 1.3 cho text có nhiều dòng
- Không ép chữ chật (line-height < 1.2 chỉ dùng cho headings)

---

### RULE 4.4 – Font weight

- Normal (400) cho body text
- Medium (500) cho sub-headings
- Bold (600–700) cho price, CTA, important info
- Không dùng Light (300) cho thông tin quan trọng

---

## 5. COLOR SYSTEM RULES

### RULE 5.1 – Color tokens bắt buộc

Chỉ dùng token đã định nghĩa:

- **Primary** (brand color, thường xanh lá #7CB342)
- **Secondary** (accent)
- **CTA** (nút hành động, thường cam/đỏ)
- **Text-primary** (gray-900)
- **Text-secondary** (gray-600)
- **Background** (white, gray-50)
- **Border** (gray-200, gray-300)
- **Warning / Error** (yellow-500, red-500)

---

### RULE 5.2 – CTA color độc quyền

- CTA color chỉ dùng cho **hành động mua** (Add to cart, Buy now, Checkout)
- Không dùng cho trang trí, badge, hoặc button phụ

---

### RULE 5.3 – Contrast

- Text quan trọng (giá, tên SP) phải đạt **WCAG AA** (contrast ratio ≥ 4.5:1)
- Không đặt giá trên nền ảnh phức tạp
- CTA button text phải white trên background đậm

---

### RULE 5.4 – Không lạm dụng màu

- Tối đa 3 màu chủ đạo trên 1 screen
- Màu phải có ý nghĩa rõ (success/error/warning/action)

---

## 6. ICON RULES

### RULE 6.1 – Icon phổ quát

Chỉ dùng icon phổ biến, dễ nhận biết:

- ❤️ Yêu thích (Heart)
- 🛒 Giỏ hàng (ShoppingCart)
- ⭐ Đánh giá (Star)
- 👁 Xem nhanh (Eye)
- 🔍 Tìm kiếm (Search)
- ✓ Thành công (CheckCircle)
- ✕ Đóng (X)

Không tự sáng tạo icon mới hoặc dùng icon trừu tượng

---

### RULE 6.2 – Icon phải có trạng thái

Mỗi icon có 3 trạng thái rõ ràng:

- **Default** (idle)
- **Active** (selected, hover)
- **Disabled** (không thao tác được)

---

### RULE 6.3 – Icon hành động chính có label

- Không dùng icon trơ cho hành động quan trọng (vd: Checkout chỉ icon không có chữ)
- Icon + text cho primary actions
- Icon only cho secondary actions (share, like)

---

### RULE 6.4 – Icon size

- Small icon: 16px
- Default icon: 20–24px
- Large icon (illustration): 48–64px

---

## 7. PRODUCT CARD RULES (CỰC KỲ QUAN TRỌNG)

### RULE 7.1 – Card anatomy bắt buộc

Mỗi product card **PHẢI** có (theo thứ tự từ trên xuống):

1. **Ảnh sản phẩm** (60% card)
2. **Tên sản phẩm** (1–2 dòng)
3. **Giá** (bold, nổi bật)
4. **Trust signal** (rating / sold count / badge)
5. **CTA** (Add to cart / Buy now)

Không thay đổi thứ tự, không bỏ thành phần

---

### RULE 7.2 – Image rules

- Tỷ lệ **1:1** (square) hoặc 4:3 (landscape)
- Không crop mất nội dung chính của ảnh
- Overlay (badge, tag) không quá **20% diện tích ảnh**
- Background placeholder khi chưa load: gray-100

---

### RULE 7.3 – Trust signal

Mỗi card phải có **ít nhất 1** trong:

- **Rating** ⭐ (vd: 4.8 ⭐)
- **Sold count** (vd: "Đã bán 120")
- **Badge** (vd: "Organic", "Verified", "Best Seller")

Không để card không có trust signal

---

### RULE 7.4 – CTA rules

- **Chỉ 1 CTA chính** trên card (Add to cart / Quick buy)
- CTA phải là **động từ rõ ràng** (VD: "Thêm vào giỏ", "Mua ngay")
- Không dùng text mơ hồ ("Click here", "Learn more")
- Button full-width hoặc prominent (nổi bật hơn mọi element khác)

---

### RULE 7.5 – Price display

- Price là **element lớn nhất** về typography
- Old price (nếu có) phải line-through, nhỏ hơn, màu xám
- Discount badge (nếu có) đặt gần price
- Format: VD "120.000₫" hoặc "120K"

---

### RULE 7.6 – Wishlist / Quick view

- Wishlist icon đặt góc trên phải của ảnh
- Quick view icon (Eye) đặt khi hover/long-press
- Không che khuất ảnh chính

---

## 8. CTA & CONVERSION RULES

### RULE 8.1 – CTA phải nổi bật nhất

- CTA là element có **độ tương phản cao nhất** trong card
- Không có element nào "chói" hơn CTA
- Background color: CTA color (vd: orange, green), text: white

---

### RULE 8.2 – Không cạnh tranh hành động

- Không đặt nhiều nút ngang hàng (vd: "Mua ngay" + "Thêm giỏ" + "Liên hệ")
- Primary CTA: 1 nút
- Secondary action: icon hoặc text link

---

### RULE 8.3 – CTA wording

- **Action-oriented**: "Thêm vào giỏ", "Mua ngay", "Đặt hàng"
- **Không**: "Click", "Xem thêm", "Tìm hiểu"

---

### RULE 8.4 – Disabled state rõ ràng

- CTA disabled (hết hàng): opacity 0.5, cursor not-allowed
- Có text giải thích: "Hết hàng", "Tạm ngưng bán"

---

## 9. INTERACTION & FEEDBACK RULES

### RULE 9.1 – Phản hồi tức thì

- Tap → phản hồi < **100ms**
- Visual feedback: scale, color change, ripple
- Không để user chờ mà không thấy gì

---

### RULE 9.2 – Feedback đa lớp

Ví dụ thêm giỏ:

1. **Animation nhẹ** (scale button, icon fly to cart)
2. **Toast** ("Đã thêm Rau cải vào giỏ")
3. **Badge tăng số** (cart icon: 2 → 3)

---

### RULE 9.3 – Không hành động im lặng

- Mọi thao tác user đều phải **thấy kết quả**
- Delete → toast confirm
- Update → visual change + toast
- Không submit form mà không có loading indicator

---

### RULE 9.4 – Animation tinh tế

- Duration: 200–400ms
- Easing: ease-out cho enter, ease-in cho exit
- Không dùng animation quá 600ms (chậm, gây khó chịu)

---

## 10. LOADING, EMPTY, ERROR RULES

### RULE 10.1 – Không màn hình trắng

- **Bắt buộc skeleton loading** khi fetch data
- Skeleton phải giống layout thật (grid 2 cột, card shape)
- Không dùng spinner đơn thuần cho list

---

### RULE 10.2 – Empty state có hướng dẫn

- Phải gợi ý **hành động tiếp theo**
- VD: "Chưa có sản phẩm nào. Thử thay đổi bộ lọc hoặc tìm kiếm."
- Có icon minh họa (empty box, search icon)

---

### RULE 10.3 – Error message thân thiện

- Không đổ lỗi user ("Bạn đã nhập sai", "Lỗi của bạn")
- Ngắn, rõ, có **hướng xử lý**
- VD: "Không thể tải sản phẩm. Vui lòng thử lại." + nút Retry

---

### RULE 10.4 – Loading indicator placement

- Inline loading cho actions (button: "Đang thêm...")
- Overlay loading cho screen transitions
- Không block toàn bộ UI nếu chỉ load 1 phần

---

## 11. NAVIGATION RULES

### RULE 11.1 – Bottom navigation

- Tối đa **5 mục**
- Icon + label (không icon-only)
- Active state rõ ràng (color + underline/fill)
- Thứ tự: Home, Categories, Cart, Profile (logic)

---

### RULE 11.2 – Giỏ hàng luôn dễ truy cập

- Cart icon luôn visible (bottom nav hoặc header)
- Có **badge hiển thị số lượng** (vd: 🛒 3)
- Badge animation khi thêm item mới

---

### RULE 11.3 – Back navigation

- Luôn có back button ở header (trái trên)
- Hoặc swipe right to go back (mobile gesture)

---

### RULE 11.5 – No dead-end navigation

- Mọi link "Chi tiết", "Tìm hiểu thêm", "Xem thêm" **PHẢI** dẫn đến một trang đích có nội dung thật.
- Không được để link chết (#), link trỏ về trang chủ, hoặc link dẫn đến trang "Đang cập nhật".
- Nội dung trang đích phải mở rộng được thông tin so với nội dung ở card/teaser trước đó.

---

## 12. ACCESSIBILITY RULES

### RULE 12.1 – Không phụ thuộc màu sắc

- Thông tin quan trọng phải có: **màu + icon + text**
- VD: Error không chỉ màu đỏ, phải có icon ❌ + text "Lỗi"

---

### RULE 12.2 – Tap target tối thiểu

- Tap target ≥ **44x44px**
- Khoảng cách giữa các tap target ≥ **8px**
- Không đặt nút nhỏ sát nhau

---

### RULE 12.3 – Labels & ARIA

- Form inputs phải có label hoặc placeholder
- Icon buttons phải có aria-label
- Images phải có alt text

---

### RULE 12.4 – Focus states

- Inputs phải có focus ring (outline)
- Keyboard navigation: Tab qua các interactive elements
- Focus visible: không ẩn outline

---

## 13. PERFORMANCE & PERCEPTION RULES

### RULE 13.1 – Ưu tiên cảm giác nhanh

- **Skeleton** thay vì spinner
- **Progressive loading** (load ảnh dần)
- Optimistic UI (update UI ngay, sync sau)

---

### RULE 13.2 – Không block UI

- User vẫn scroll được khi loading nhẹ
- Chỉ block UI khi thao tác critical (payment, checkout)

---

### RULE 13.3 – Image optimization

- Lazy load ảnh không trong viewport
- Placeholder blur hoặc solid color
- Responsive images (srcset)

---

### RULE 13.4 – Perceived performance

- Show content ngay (skeleton) < 100ms
- Actual data load < 1s
- Không để màn hình trắng > 500ms

---

## 14. AI AGENT META RULES (NGHIÊM NGẶT)

### RULE 14.1 – Không sáng tạo UX pattern mới

- Chỉ dùng **pattern quen thuộc** (grid, list, bottom nav, tabs)
- Không tự nghĩ ra pattern "độc đáo"
- Reference: Shopee, Tiki, Lazada, Amazon app

---

### RULE 14.2 – Không "nghệ thuật hóa" UI

- App này là **bán hàng**, không phải showcase design
- Ưu tiên conversion > aesthetic
- Đơn giản, rõ ràng > fancy, phức tạp

---

### RULE 14.3 – Câu hỏi bắt buộc cho mọi quyết định UI

> **"Điều này có giúp user mua nhanh hơn, tin hơn, ít suy nghĩ hơn không?"**

Nếu **không trả lời được → KHÔNG ĐƯỢC THÊM**

Áp dụng cho:
- Mọi element mới
- Mọi animation
- Mọi thông tin thêm vào card
- Mọi modal / dialog

---

### RULE 14.4 – Không overthink

- Không tối ưu quá mức (vd: A/B test 10 màu nút)
- Dùng best practice đã biết
- Ship fast, iterate later

---

## 15. FINAL ENFORCEMENT RULE

### RULE 15.1 – Ưu tiên đơn giản hơn thông minh

- Nếu phải chọn giữa "simple but works" vs "complex but perfect" → **chọn simple**
- Nếu phải chọn giữa "dễ dùng" vs "đẹp" → **chọn dễ dùng**
- Nếu phải chọn giữa "fast" vs "fancy" → **chọn fast**

---

### RULE 15.2 – When in doubt, remove

- Nếu không chắc element có cần thiết → **bỏ đi**
- Nếu không chắc info có giúp quyết định → **ẩn đi**
- Less is more

---

### RULE 15.3 – Test with real behavior

- Mobile: test bằng ngón tay, không chuột
- Scroll: test ở outdoor (ánh sáng mạnh)
- Speed: test với 3G slow

---

## 16. COMPONENT-SPECIFIC RULES

### RULE 16.1 – Search Bar

- Luôn sticky ở top khi scroll
- Placeholder rõ ràng: "Tìm rau, củ, trái cây..."
- Icon search bên trái input
- Clear button (X) khi có text

---

### RULE 16.2 – Filter / Sort

- Filter button nổi bật, dễ thấy
- Active filters hiển thị (chip/badge)
- Clear all filters button

---

### RULE 16.3 – Cart Badge

- Luôn visible
- Animation khi tăng số (+1 fly-in)
- Max number: 99+

---

### RULE 16.4 – Modal / Bottom Sheet

- Mobile: ưu tiên bottom sheet (swipe down to close)
- Desktop: modal centered
- Có backdrop click to close
- ESC key to close

---

### RULE 16.5 – Toast / Notification

- Position: top-center hoặc bottom-center (mobile)
- Auto dismiss sau 3–5s
- Có icon + message rõ ràng
- Swipe to dismiss

---

### RULE 16.6 – Tabs

- Sticky tabs khi scroll qua
- Active tab: underline + color change
- Swipeable tabs trên mobile

---

## 17. SPECIFIC PATTERNS FOR COMMERCE

### RULE 17.1 – "Add to Cart" button

- Luôn visible, không cần scroll
- Sticky bottom button trên product detail
- Color: CTA color, full-width, 48–56px height

---

### RULE 17.2 – Price display hierarchy

```
Giá chính (lớn nhất, bold)
Giá cũ (line-through, nhỏ hơn, xám)
Discount badge (%, màu warning)
```

---

### RULE 17.3 – Out of stock

- Ảnh overlay: semi-transparent gray
- Badge "Hết hàng" rõ ràng
- CTA disabled với text "Hết hàng"
- Có option "Thông báo khi có hàng"

---

### RULE 17.4 – Quantity selector

- Default: 1
- +/- buttons ≥ 44x44px
- Number input center, readonly on mobile (dùng +/-)
- Max quantity từ stock hoặc limit

---

### RULE 17.5 – Variant selector (size, color)

- Radio buttons hoặc chips
- Selected state rõ ràng (border + background)
- Disabled variants: opacity 0.4 + line-through

---

## 18. FORBIDDEN PATTERNS (CẤM TUYỆT ĐỐI)

### ❌ RULE 18.1 – Carousel/Slider cho product list

- Không dùng horizontal carousel cho product list chính
- User không thấy toàn bộ options
- Chỉ dùng carousel cho: banners, gallery trong detail

---

### ❌ RULE 18.2 – Infinite loading không có indicator

- Phải có "Loading more..." khi scroll
- Phải có "End of list" khi hết

---

### ❌ RULE 18.3 – Pop-up quá sớm

- Không popup đăng ký/khuyến mãi ngay khi vào app
- Chỉ show sau ít nhất 1 hành động

---

### ❌ RULE 18.4 – Video auto-play

- Không auto-play video có âm thanh
- Chỉ auto-play muted video

---

### ❌ RULE 18.5 – Quá nhiều animations

- Không animate mọi thứ
- Chỉ animate: state transitions, feedback, micro-interactions

---

### ❌ RULE 18.6 – Text quá nhỏ

- Không dùng font-size < 12px cho thông tin quan trọng
- Minimum readable: 12px

---

### ❌ RULE 18.7 – Hidden navigation

- Không ẩn navigation chính vào hamburger menu (mobile)
- Dùng bottom nav thay vì hamburger

---

## 19. MOBILE-SPECIFIC GESTURES

### RULE 19.1 – Swipe gestures

- **Swipe right**: back
- **Swipe down**: close modal/bottom sheet
- **Long press**: context menu / quick actions
- **Pull to refresh**: reload list

---

### RULE 19.2 – Double tap

- Không dùng double tap cho hành động critical
- Chỉ dùng cho: like, zoom

---

## 20. FORM RULES

### RULE 20.1 – Form fields

- 1 field per row (mobile)
- Label trên input, không bên cạnh
- Input height ≥ 48px (dễ tap)

---

### RULE 20.2 – Validation

- Inline validation (khi blur input)
- Error message ngay dưới field
- Success state: green border + checkmark

---

### RULE 20.3 – Submit button

- Sticky bottom (mobile)
- Disabled khi chưa valid
- Loading state khi submit

---

## 21. CHECKLIST TRƯỚC KHI HOÀN TẤT UI

```
□ Mobile-first design?
□ One-hand usage ≥ 80%?
□ Grid 2 cột (mobile)?
□ Spacing: chỉ 4/8/12/16/24px?
□ Font size: 12–18px range?
□ CTA nổi bật nhất?
□ Product card có đủ 5 thành phần?
□ Trust signal có ít nhất 1?
□ Tap target ≥ 44x44px?
□ Contrast đạt WCAG AA?
□ Skeleton loading thay spinner?
□ Toast/feedback cho mọi action?
□ Bottom nav ≤ 5 items?
□ Không dùng carousel cho product list?
□ Không popup quá sớm?
□ Animation ≤ 400ms?
□ Error messages thân thiện?
□ CTA wording: action verbs?
□ Icon phổ quát, có trạng thái?
□ Không element nào "chói" hơn CTA?
□ "Điều này giúp user mua nhanh hơn không?" → Yes
```

---

## 22. INTEGRATION VỚI AI-CODING-RULES

**Khi làm giao diện hoặc refactor giao diện:**

1. ✅ **ĐỌC UI-UX-DESIGN-RULESET.md** (file này)
2. ✅ **ĐỌC AI-CODING-RULES.jsx Section 0 (UI/UX Interaction)**
3. ✅ Apply cả 2 rulesets:
   - UI-UX-DESIGN-RULESET: thiết kế, layout, conversion
   - AI-CODING-RULES: code structure, không dùng window.confirm, dùng Icon library

---

**END OF RULESET**

> **Philosophy**: 
> - UI phục vụ conversion, không phải thẩm mỹ
> - Đơn giản > Phức tạp
> - Dễ dùng > Đẹp
> - Fast > Fancy
> - Decision-focused > Decoration-focused

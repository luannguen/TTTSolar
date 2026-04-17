# Architecture Overview

> **Version**: 3.1.0  
> **Last Updated**: 2026-01-02  
> **Status**: Feature-Based Module Architecture

---

## Cấu Trúc Thực Tế Dự Án

```
components/
├── features/                      # FEATURE MODULES (New Pattern)
│   ├── preorder/                  # Pre-Order Module
│   │   ├── ui/                    # UI Components
│   │   ├── domain/                # Business Logic (Pure Functions)
│   │   ├── data/                  # Repositories (API calls)
│   │   ├── types/                 # DTOs, Constants
│   │   ├── hooks/                 # React Hooks (Orchestration)
│   │   ├── README.md              # Module documentation
│   │   └── index.js               # Public API
│   ├── referral/                  # Referral Module
│   │   ├── ui/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── types/
│   │   ├── hooks/
│   │   ├── README.md
│   │   └── index.js
│   ├── checkout/                  # Checkout Module
│   │   ├── ui/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── types/
│   │   ├── README.md
│   │   └── index.js
│   ├── ecard/                     # E-Card Module (NEW)
│   │   ├── ui/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.js
│   ├── gift/                      # Gift Module
│   │   ├── ui/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── types/
│   │   └── index.js
│   ├── notification/              # Notification Module
│   │   ├── ui/
│   │   ├── core/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── index.js
│   ├── email/                     # Email Module
│   │   ├── application/
│   │   ├── core/
│   │   ├── domain/
│   │   ├── infrastructure/
│   │   ├── events/
│   │   └── index.js
│   ├── saas/                      # SaaS Multi-tenant Module
│   │   ├── ui/
│   │   ├── domain/
│   │   ├── data/
│   │   ├── hooks/
│   │   └── index.js
│   └── bridges/                   # Cross-module Integration
│       ├── checkoutReferralBridge.js
│       ├── checkoutLoyaltyBridge.js
│       └── index.js
│
├── data/                          # DATA LAYER (Legacy + Shared)
│   ├── types.js                   # DTOs, Result<T>, ErrorCodes
│   ├── useCaseRegistry.js         # Registry tất cả use cases
│   ├── index.js                   # Central exports
│   ├── repositories/              # Shared repositories
│   │   ├── baseRepository.js
│   │   ├── productRepository.js
│   │   ├── orderRepository.js
│   │   ├── customerRepository.js
│   │   ├── referralRepository.js
│   │   └── notificationRepository.js
│   └── registry/                  # Use case registries
│       └── domains/
│
├── shared/                        # SHARED UTILITIES
│   ├── hooks/                     # Base hooks (reusable)
│   │   ├── useEntityList.js
│   │   ├── useEntityDetail.js
│   │   ├── useEntityMutation.js
│   │   └── index.js
│   ├── ui/                        # Shared UI components
│   │   ├── LoadingState.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorState.jsx
│   │   └── Breadcrumb.jsx
│   ├── errors/                    # Error handling
│   │   └── errorMapper.js
│   └── utils/                     # Utilities
│       ├── formatters.js
│       └── debounce.js
│
├── hooks/                         # LEGACY HOOKS (Adapters)
│   ├── usePreOrderLots.js         # → Adapter → features/preorder
│   ├── useEscrow.js               # → Adapter → features/preorder
│   ├── useDispute.js              # → Adapter → features/preorder
│   ├── useReferralSystem.js       # → Adapter → features/referral
│   ├── useCheckout.js             # → Adapter → features/checkout
│   └── ...
│
├── services/                      # LEGACY SERVICES (Adapters)
│   ├── PreOrderCancellationService.js      # → Adapter
│   ├── PreOrderCancellationServiceAdapter.js
│   ├── AutoCompensationEngine.js           # → Adapter
│   ├── AutoCompensationEngineAdapter.js
│   ├── escrowCore.js                       # → Adapter
│   ├── escrowCoreAdapter.js
│   ├── DisputeService.js                   # → Adapter
│   ├── ReferralService.js                  # → Adapter
│   ├── CheckoutService.js                  # → Adapter
│   └── ...
│
├── instruction/                   # DOCUMENTATION
│   ├── AI-CODING-RULES.jsx        # Coding rules for AI
│   ├── ARCHITECTURE.md            # This file
│   ├── EcardCacheHybridPlan.md    # EcardCache implementation plan
│   ├── ModuleRefactorPlan.md      # Refactor plan
│   ├── PreOrderModuleRefactorPlan.md
│   ├── ReferralModuleRefactorPlan.md
│   ├── CheckoutModuleRefactorPlan.md
│   ├── SAASPlanUpdate.md
│   └── UI-UX-DESIGN-RULESET.md    # UI/UX Rules
│
└── ui/                            # SHADCN COMPONENTS
    ├── button.jsx
    ├── card.jsx
    ├── AnimatedIcon.jsx           # Icon system
    └── ...
```

---

## Module Architecture (New Pattern)

### Cấu trúc Module Chuẩn

Mỗi feature module có cấu trúc:

```
features/<module>/
├── types/                 # DTOs, Constants, Enums
│   ├── <Module>DTO.js
│   └── index.js
├── domain/                # Business Logic (PURE FUNCTIONS)
│   ├── <domain>Rules.js   # Business rules
│   ├── validators.js      # Validation logic
│   └── index.js
├── data/                  # Repositories (API calls only)
│   ├── <entity>Repository.js
│   └── index.js
├── hooks/                 # React Hooks (Orchestration)
│   ├── use<Feature>.js
│   └── index.js
├── ui/                    # UI Components (optional)
│   └── index.js
├── README.md              # Module documentation
└── index.js               # PUBLIC API
```

### Nguyên tắc Module

| Layer | Cho phép | Không cho phép |
|-------|----------|----------------|
| **types/** | Type definitions, constants | Logic, API calls |
| **domain/** | Pure functions, business rules | API calls, React hooks, side effects |
| **data/** | API calls (base44.entities.*) | Business logic, React state |
| **hooks/** | Orchestrate domain + data, React state | Direct API calls, complex logic |
| **ui/** | Render props, emit events | API calls, business logic |

---

## 4 Lớp Kiến Trúc

### 1. UI Layer (Components)
- Chỉ render, nhận props
- Import từ `@/components/shared/ui` cho states chung
- KHÔNG gọi API trực tiếp

### 2. Feature Logic Layer (Hooks)
- Quản lý state, validation, business logic nhẹ
- **Module hooks**: Orchestrate domain + data
- **Legacy hooks**: Adapter → Module hooks

### 3. Domain Layer (Business Logic)
- **Pure functions** - Không side effects
- Business rules, calculations, validation
- Nằm trong `features/<module>/domain/`

### 4. Data Layer (Repositories)
- Gọi API (base44.entities.*)
- Mapping DTO
- Trả về Result<T>

---

## Module Status

| Module | Status | Location | README |
|--------|--------|----------|--------|
| **Pre-Order** | ✅ Complete | `features/preorder/` | ✅ |
| **Referral** | ✅ Complete | `features/referral/` | ✅ |
| **Checkout** | ✅ Complete | `features/checkout/` | ✅ |
| **E-Card** | ✅ Complete | `features/ecard/` | ✅ |
| **Gift** | ✅ Complete | `features/gift/` | ✅ |
| **Notification** | ✅ Complete | `features/notification/` | ✅ |
| **Email** | ✅ Complete | `features/email/` | ✅ |
| **Experience** | 🔄 Partial | `features/experience/` | ❌ |
| **Loyalty** | ⬜ Legacy | `components/services/` | ❌ |
| **Community** | ⬜ Legacy | `components/community/` | ❌ |
| **SaaS** | ✅ Complete | `features/saas/` | ✅ |

**Legend**: ✅ Complete | 🔄 Partial | ⬜ Legacy

---

## EcardCache - Hybrid Caching Strategy

### Vấn đề cần giải quyết

Page `/MyEcard` yêu cầu 5-10+ API calls để load đầy đủ data (posts, products, connections, gifts...), gây chậm 1-2 giây.

### Giải pháp: Hybrid Cache

Kết hợp:
1. **Pre-computed cache** - Data được tính toán sẵn, lưu trong `EcardCache` entity
2. **Optimistic updates** - Update UI ngay lập tức khi user action
3. **Background sync** - Scheduled task sync mỗi giờ để đảm bảo consistency

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌────────────────┐    ┌─────────────────┐ │
│  │   MyEcard    │───▶│  useEcardCache │───▶│ ecardCacheRepo  │ │
│  │   (Page)     │    │    (Hook)      │    │   (Data Layer)  │ │
│  └──────────────┘    └────────────────┘    └─────────────────┘ │
│         │                    │                      │           │
│         │                    │                      ▼           │
│         │                    │            ┌─────────────────┐   │
│         │                    │            │  EcardCache     │   │
│         │                    │            │  (Entity)       │   │
│         │                    │            └─────────────────┘   │
│         │                    │                                  │
│  ┌──────▼──────┐    ┌───────▼────────┐                         │
│  │ Components  │    │ Optimistic     │                         │
│  │ - ProfileTab│    │ Updates        │                         │
│  │ - StatsBar  │    │ - onPostCreated│                         │
│  │ - GiftsTab  │    │ - onConnection │                         │
│  └─────────────┘    │ - onGiftAction │                         │
│                     └────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        BACKEND                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────┐         ┌─────────────────────────┐    │
│  │  syncEcardCache    │◀────────│  Scheduled Task         │    │
│  │  (Backend Function)│         │  (Every 1 hour)         │    │
│  └────────────────────┘         └─────────────────────────┘    │
│            │                                                    │
│            ▼                                                    │
│  ┌─────────────────────────────────────────┐                   │
│  │ Aggregates data from:                   │                   │
│  │ - EcardProfile                          │                   │
│  │ - UserPost (count)                      │                   │
│  │ - ShopProduct (count)                   │                   │
│  │ - UserConnection (top 20 + count)       │                   │
│  │ - GiftTransaction (recent 5 each type)  │                   │
│  └─────────────────────────────────────────┘                   │
│            │                                                    │
│            ▼                                                    │
│  ┌─────────────────────────────────────────┐                   │
│  │ Upsert to EcardCache entity             │                   │
│  └─────────────────────────────────────────┘                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

```
1. User mở /MyEcard
   │
   ▼
2. useEcardCache() được gọi
   │
   ├──▶ Query EcardCache entity (1 API call)
   │
   ├──▶ Nếu cache stale (>1h) → trigger background sync
   │
   └──▶ Return cached data ngay lập tức
   
3. User tạo post mới
   │
   ├──▶ Optimistic update: stats.post_count += 1
   │
   └──▶ Background: persist to DB
   
4. Scheduled task (hourly)
   │
   └──▶ syncEcardCache() → refresh all data
```

### EcardCache Module Structure

```
features/ecard/
├── index.js                    # Public exports
├── data/
│   ├── ecardCacheRepository.js # CRUD operations for EcardCache
│   └── userStatsRepository.js  # User stats aggregation
├── types/
│   └── EcardCacheDTO.js        # Types + constants
├── hooks/
│   ├── useEcardCache.js        # Main cache hook
│   ├── useUserStats.js
│   ├── useExperienceSettings.js
│   └── useExperiencePreview.js
└── ui/
    ├── ExperienceSettingsCard.jsx
    ├── EcardExtensionsPanel.jsx
    └── ThemePreviewStyles.jsx
```

### EcardCache Entity Schema

```json
{
  "user_id": "string",
  "user_email": "string",
  "profile_snapshot": {
    "display_name": "string",
    "avatar_url": "string",
    "slug": "string",
    "title": "string",
    "company": "string"
  },
  "stats": {
    "post_count": "number",
    "product_count": "number",
    "connection_count": "number",
    "gifts_received_count": "number",
    "gifts_sent_count": "number",
    "view_count": "number"
  },
  "connections_preview": [...],  // Top 20 connections
  "gifts_summary": {
    "recent_received": [...],    // Last 5
    "recent_sent": [...]         // Last 5
  },
  "last_synced_at": "datetime",
  "sync_version": "number"
}
```

### Hook API

```javascript
import { useEcardCache } from '@/components/features/ecard';

const {
  // Data
  cache,              // Full cache object
  stats,              // Pre-computed stats
  connectionsPreview, // Top 20 connections
  giftsSummary,       // Recent gifts
  profileSnapshot,    // Basic profile info
  
  // Status
  isLoading,
  error,
  isStale,           // Cache > 1 hour old
  isSyncing,         // Background sync in progress
  lastSyncedAt,
  
  // Actions
  forceSync,         // Manually trigger sync
  refetch,
  
  // Optimistic updates
  onPostCreated,     // Call after creating post
  onConnectionAdded, // Call after adding connection
  onGiftAction,      // Call after gift sent/received
} = useEcardCache();
```

### Integration Points

| Component | Integration |
|-----------|-------------|
| `pages/MyEcard.js` | Prefetch cache, use stats |
| `EcardProfileTab.jsx` | Display stats from cache |
| `EcardStatsDashboard.jsx` | Show cached stats + sync indicator |
| `CreatePostModalEnhanced.jsx` | Call `onPostCreated()` |
| `useConnections.js` | Call `onConnectionAdded()` |
| `useGiftSend.js` | Call `onGiftAction()` |

### Performance Gains

| Metric | Before | After |
|--------|--------|-------|
| API calls on load | 5-10+ | 1-2 |
| Time to interactive | ~1.5s | ~200ms |
| Data freshness | Real-time | Near real-time (optimistic) |

### Scheduled Task

- **Name**: Hourly EcardCache Sync
- **Function**: `syncEcardCache`
- **Schedule**: Every 1 hour
- **Status**: Active ✅

---

## Cách Sử Dụng

### Import từ Module (Ưu tiên)

```javascript
// ✅ ĐÚNG - Import từ module public API
import { 
  usePreOrderLots,
  useLotDetail,
  useCancelPreOrder,
  WALLET_STATUS,
  calculateRefund
} from '@/components/features/preorder';

import { 
  useMyReferralMember,
  useReferralCommissions,
  REFERRAL_RANKS
} from '@/components/features/referral';

import { 
  useCheckout,
  useCheckoutCart,
  calculateTotal
} from '@/components/features/checkout';

import { 
  useEcardCache,
  ecardCacheRepository,
  EMPTY_CACHE,
  isCacheStale
} from '@/components/features/ecard';
```

### Import từ Shared

```javascript
import { 
  LoadingState, 
  EmptyState, 
  ErrorState 
} from '@/components/shared/ui';

import { 
  useEntityList, 
  useEntityMutation 
} from '@/components/shared/hooks';
```

### Import từ Data Layer

```javascript
import { 
  productRepository, 
  orderRepository,
  success, failure, ErrorCodes 
} from '@/components/data';
```

---

## Backward Compatibility

### Adapter Pattern

Legacy code được duy trì qua adapters:

```javascript
// Legacy import (vẫn hoạt động)
import { usePreOrderLots } from '@/components/hooks/usePreOrderLots';

// Adapter file re-exports từ module
// components/hooks/usePreOrderLots.js
export * from '@/components/features/preorder';
```

### Migration Path

1. **New code**: Import trực tiếp từ `features/<module>`
2. **Existing code**: Vẫn hoạt động qua adapters
3. **Gradual migration**: Update imports khi refactor

---

## Checklist Khi Tạo Feature Mới

### Module-Based (Ưu tiên)

```
□ Đọc module README.md nếu có (features/<module>/README.md)
□ Tạo module structure: types/, domain/, data/, hooks/
□ Types/DTO trong module types/
□ Business logic trong module domain/
□ Repository trong module data/
□ Hook orchestration trong module hooks/
□ index.js export public API
□ README.md cho module
□ Update useCaseRegistry.js
```

### Legacy Pattern (Khi extend existing)

```
□ Định nghĩa DTO trong data/types.js
□ Tạo repository trong data/repositories/
□ Tạo hook extend từ shared/hooks/
□ UI dùng shared components
□ Update useCaseRegistry.js
□ Dùng ErrorCodes cho errors
```

---

## Anti-Patterns (Cấm)

```
❌ UI gọi trực tiếp base44.entities.*
❌ Import sâu vào module internal (data/, domain/)
❌ Circular dependency giữa services
❌ Business logic trong UI components
❌ Tạo mega file (>300 dòng)
❌ Duplicate logic giữa modules
❌ Import từ legacy khi đã có module
```

---

## Architecture Principles

1. **Layered Architecture**: UI → Hooks → Services/Repositories → Entities
2. **Feature Modules**: Nhóm code theo feature, không theo type
3. **Optimistic Updates**: Update UI trước, sync background sau
4. **Caching Strategy**: Pre-compute expensive queries
5. **Scheduled Tasks**: Background jobs cho heavy operations

---

> **Ghi nhớ**: Mọi feature mới PHẢI theo module architecture.
> Import từ module public API (index.js), không import internal files.
> Đọc README.md của module trước khi code.

---

*Last updated: 2026-01-02*

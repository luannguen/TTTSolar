# 🎨 DESIGN SYSTEM STANDARD

**Version**: 1.0.0
**Last Updated**: 2026-01-17
**Status**: **REFERENCE** (Technical Specs)
**Scope**: Tokens, Component Specs, Implementation Details

> **NOTE**: This file complements `UI-UX-DESIGN-RULESET.md`. While the Ruleset defines "WHAT" and "WHY", this Standard defines "HOW" and "EXACT VALUES".

---

## 💎 PART 1: DESIGN TOKENS

### 1.1 Color Tokens
**Primary (Violet)**
```css
/* Brand Colors */
--color-primary-50:  #F5F3FF;
--color-primary-100: #EDE9FE;
--color-primary-500: #8B5CF6;
--color-primary-600: #7C3AED; /* Main Brand */
--color-primary-700: #6D28D9;
```

**Semantic**
- **Success**: `#10B981` (Green-500)
- **Error**: `#EF4444` (Red-500)
- **Warning**: `#F59E0B` (Amber-500)
- **Info**: `#3B82F6` (Blue-500)

**Module Colors**
- **E-Card**: `#10B981` (Green)
- **Shop**: `#3B82F6` (Blue)
- **Referral**: `#F59E0B` (Amber)
- **Admin**: `#7C3AED` (Violet)

### 1.2 Spacing System (Base 4px)
```css
--space-1:  4px;
--space-2:  8px;   /* Tight */
--space-4:  16px;  /* Default Gap */
--space-6:  24px;  /* Section Padding */
--space-8:  32px;
--space-12: 48px;  /* Layout Spacing */
```

### 1.3 Typography (Inter Focus)
- **Headings**: `Inter` (Bold 600-700)
- **Body**: `Inter` (Regular 400)
- **Mono**: `JetBrains Mono`

**Scale**:
- `text-xs`: 12px
- `text-sm`: 14px
- `text-base`: 16px (Body standard)
- `text-lg`: 18px
- `text-xl`: 20px
- `text-2xl`: 24px

### 1.4 Shadows & Radius
**Radius**:
- `rounded-md`: 6px (Buttons, Inputs)
- `rounded-lg`: 8px (Cards)
- `rounded-xl`: 12px (Modals)
- `rounded-full`: 9999px (Pills, Avatars)

**Shadows**:
- `shadow-sm`: Subtle
- `shadow-md`: Cards default
- `shadow-lg`: Hover / Modals
- `shadow-primary`: Colored shadow `rgba(124, 58, 237, 0.39)`

---

## 🧩 PART 2: COMPONENT SPECIFICATIONS

### 2.1 Button
**Import**: `import { Button } from '@/components/ui/button';`
**Variants**:
- `default`: Violet-600 bg, White text (Primary actions)
- `outline`: Border Violet-600, Text Violet-600 (Secondary)
- `ghost`: No border, hover bg-gray-100 (Icon buttons, tertiary)
- `destructive`: Red-600 bg (Delete)

**Sizes**:
- `sm`: h-8 px-3 text-xs
- `md`: h-10 px-4 text-sm (Default)
- `lg`: h-12 px-8 text-base

### 2.2 Product Card (Strict Anatomy)
**Import**: `import { Card } from '@/components/ui/card';`
**Must Contain**:
1. Image (Aspect Square, Lazy)
2. Title (Limit 2 lines)
3. Price (Bold, Primary Color/Black)
4. Rating/Sold (Social Proof)
5. CTA (Add to Cart)

### 2.3 Modal / Dialog
**Import**: `import EnhancedModal from '@/components/EnhancedModal';`
**Usage**:
```jsx
<EnhancedModal
  isOpen={isOpen}
  title="Edit Profile"
  maxWidth="2xl"
  enableDrag={false} // True for utility modals
>
  {content}
</EnhancedModal>
```

### 2.4 Inputs & Forms
**Import**: `import { Input } from '@/components/ui/input';`
**States**:
- **Default**: Gray-200 border
- **Focus**: Ring-2 Ring-Violet-500
- **Error**: Border-Red-500 + Error message below
- **Disabled**: Opacity-50, cursor-not-allowed

### 2.5 Toast Notification
**Import**: `import { useToast } from '@/components/NotificationToast';`
**Rules**:
- **Success**: Green, Icon Check
- **Error**: Red, Icon X
- **Auto-dismiss**: 3-5s

---

## 🛠 PART 3: IMPLEMENTATION UTILITIES

### Tailwind Integration
Use Tailwind utility classes that map to these tokens:
- `bg-primary-600` → `var(--color-primary-600)`
- `p-4` → `var(--space-4)`
- `text-xl` → `var(--text-xl)`
- `shadow-lg` → `var(--shadow-lg)`

### Icons
**ALWAYS** use `import { Icon } from '@/components/ui/AnimatedIcon.jsx';`
- `<Icon.Spinner />`
- `<Icon.CheckCircle />`
- `<Icon.Trash />`
**NEVER** import directly from `lucide-react` in feature code.

### Z-Index Scale
- `z-0`: Base
- `z-10`: Sticky Headers
- `z-50`: Dropdowns
- `z-100`: Modals
- `z-150`: Toasts (Top most)

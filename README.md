# SuppleFit - A Next.js Supplement Store

This is a full-stack, dual-interface e-commerce application built with Next.js for a supplement store. It features a customer-facing storefront and a provider portal for order management.

## Features

-   **Storefront:**
    -   Homepage with best-seller carousel and FAQ section.
    -   Product listing page with advanced filtering, searching, and sorting.
    -   Dynamic product detail pages.
    -   Shopping cart with session-based state.
    -   Checkout form with client-side validation.
-   **Provider Portal:**
    -   Paginated and searchable/filterable table of all orders.
    -   Order detail page to view order info and update status.
-   **State Management:**
    -   React Context for ephemeral cart state.
    -   Zustand with `persist` middleware for persistent order data in `localStorage`.
-   **UI:**
    -   Built with the sleek and customizable `shadcn/ui`.
    -   Styled with TailwindCSS.

## Technical Stack

-   **Framework:** Next.js 14 (App Router)
-   **Language:** TypeScript
-   **UI:** shadcn/ui
-   **Styling:** TailwindCSS
-   **State Management:** React Context, Zustand

## Getting Started

### 1. Installation

Clone the repository and install the dependencies.

```bash
git clone <your-repo-url>
cd supplement-store
npm install
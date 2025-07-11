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

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and npm installed on your system.

### 1. Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/kukalajet/supplement-store.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd supplement-store
    ```

3.  Install the project dependencies:
    ```bash
    npm install
    ```

### 2. Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

This command starts the application in development mode with Next.js's Turbopack for faster performance. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The page will automatically reload as you make edits.

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
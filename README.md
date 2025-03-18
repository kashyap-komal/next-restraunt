This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

VVI: in Next.js App Router, you must include the square brackets [] in your folder name when defining a dynamic route.

🔹 In VS Code Folder Structure
You should literally create a folder named:

✅ [id] (with square brackets)

🗂️ Correct Folder Structure in VS Code
lua
Copy
Edit
/app
 └── /restaurant
     └── [id]          <-- Folder name must include square brackets
         └── page.jsx   <-- The React component for the dynamic route
❓ Why is this Required?
Square brackets tell Next.js that this folder represents a dynamic route segment.
Without the brackets, Next.js will treat the folder name as static.
🚨 Incorrect Example (Will Not Work)
bash
Copy
Edit
/app
 └── /restaurant
     └── id            <-- ❌ Treated as a static route, NOT dynamic
         └── page.jsx
🔹 Accessing /restaurant/649401 would result in a 404 error.

✅ Correct Example (Will Work)
bash
Copy
Edit
/app
 └── /restaurant
     └── [id]          <-- ✅ Dynamic route segment
         └── page.jsx
🔹 Accessing /restaurant/649401 will correctly render the page.jsx content.

🧠 Key Rule:
Square brackets are mandatory in the folder name for dynamic routes in the Next.js App Router. 😊

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

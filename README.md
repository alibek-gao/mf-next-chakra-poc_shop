# Module Federation with Next.js and Chakra UI

This is POC for Module Federation with Next.js and Chakra UI.

It contains three Next.js 13 apps:

  * `layout` - port 3000, [another repository](https://github.com/alibek-gao/mf-next-chakra-poc_layout)
  * `content` - port 3001, [another repository](https://github.com/alibek-gao/mf-next-chakra-poc_pricing)
  * `shop` - port 3002, this repository

Both apps bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Module Federation is configured based on examples from [https://github.com/module-federation/module-federation-examples](https://github.com/module-federation/module-federation-examples).

All components are taken from [Chakra Templates](https://chakra-templates.dev).

## Getting Started

Clone both apps and run the development server in each:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


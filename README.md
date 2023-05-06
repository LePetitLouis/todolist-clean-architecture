# Example of Clean Architecture (with Redux)

## Get started
```
npm ci
npm run start
```

## L'organisation

3 Separator: Domain, Infrastructure and Interface.

```
src
├── Domain
│   ├── Entities (TypeScript Entities)
│   └── Usecases (Reducers Redux and business function)
├── Infrastructure
│   └── Gateways (API's connection, fetchs)
├── Store
└── UserInterface
    ├── Composants
    └── Pages
```
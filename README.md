# Example of Clean Architecture (with Redux)

## Setup project
```
npm ci
npm run start
```

## Organization

3 Separator: Domain, Infrastructure and Interface.

```
src
├── Domain
│   ├── Entities (TypeScript Entities)
│   └── Usecases (Reducers Redux and Business Function)
├── Infrastructure
│   └── Gateways (API's Connection, Fetchs)
├── Store
└── UserInterface
    ├── Composants
    └── Pages
```
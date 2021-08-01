# EZ Quiz

## Step to run project

#### Install and Run
+ Go to root of project
+ Run: `yarn install` for install all packages
+ Run: `yarn dev` for start dev environment
+ Run: `yarn build` for build your project
+ Run: `yarn start` for start your built project
+ Run: `yarn storybook` for start developing your component
+ Run: `yarn lint` or `yarn lint:style` for checking error and fix it

### Project structure
```
├── apis                # All apis come here
├── components          # All components that can share between screen
│   └── __template      # Template for component
├── configs             # All configs and constant goes here
├── hooks               # Custom hooks for project
├── layouts             # Layouts of screen and components
├── locales             # I18N Language files
│   ├── en
│   └── vi
├── pages               # Page file of NextJS (Use as router to screen folder)
├── public              # Public folder, contain static files
├── screens             # Screen component goes here
│   └── __template      # Template for screen component
├── services            # All services goes here
├── states              # State managerment for app
│   ├── recoil          # Recoil sattes (for app state)
│   └── redux           # Redux state (for api state)
│       └── slice       # Slice from redux-toolkit
├── styles              # App global styles (SCSS)
├── types               # App global type (Typescript)
└── utils               # App's utils
```

### Some code rule
+ Component that belong only to screen, should be placed on that screen's folder
+ App's state should using Recoil, state relate to API should using Redux
+ Function that can be used many time should place in utils or hooks if relate to state
+ HOC placed in components have prefix `HOC*` like `HOCAuthentication`
+ Layout placed in `layouts` and have prefix `Layout*` like `LayoutMain` or `LayoutDefault`
+ All atom from recoil should have prefix `atom*` like `atomDarkMode`
+ All config from configs folder should have export prefix `config*` like `configApp` or `configHomeScreen`
+ All redux slice should have prefix `action*` in action name like `actionGetHomeProduct` or `actionGetStats`

## Tech included
+ `NextJS + Typescript` Base source
+ `Redux Toolkit and Recoil` State managerment
+ `Storybook` Component helper
+ `Husky` Git helper
+ `SCSS modules` Style system
+ `Eslint and Stylelint` Rule of code

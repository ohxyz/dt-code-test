# AKQA Code Test

Demo: http://ademo.info/dt-code-test


## Introduction

Uses React and Sass with mobile first design.

## Code organization in src folder

config.js - Configuration file. Defines paths to resouces.

model.js - Global data layer. Defines access data from server.

index.js - Application entry point.

components folder - Defines each React components.

style folder - Uses Sass. In other case, would include fonts, SVGs, etc.

## Create dev environment

Environment: Windows. However the build process would be similar in OSX and linux.

Prerequistes: Node.js, React, Git

1. ```C:\>create-react-app dt-code-test```

2. ```C:\>cd dt-code-test```

3. Remove all files and folder in C:\\dt-code-test, except for node_modules.

4. ```C:\dt-code-test>git init```

5. ```C:\dt-code-test>git remote add origin https://github.com/ohxyz/dt-code-test.git```

5. ```C:\dt-code-test>git pull origin master```

6. ```C:\dt-code-test>sass src\style\scss\main.scss src\style\index.css```

7. ```C:\dt-code-test>npm run start```

## Build

```C:\dt-code-test>npm run build```
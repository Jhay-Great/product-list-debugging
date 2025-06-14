## Approach for identifying bugs
1. Clone the project and install  the dependencies with git clone and npm install.
2. Run the project with the ng serve.
3. Read and view errror messages in the terminal.
4. Trace the root of the erro and debug.

## Errors Found.
1. At line 7 of add-to-cart-component.ts file, there was a syntax error on the component decorator as ';' was added at the end causing a syntax error hence taken out.
2. On line 9 of app.component.ts, there was a syntax error on the component decorator as ; was added causing an error hence taken out.
3. The appComponent class is to be positioned right afer the component decorator. Hence the repositioning was refactored.
4. There was a syntax error in the appComponent.ts file as the app-to-cart-component component used in the html file was not imported.This was done in the component decorator import.